import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ссылки на елементы
const containerTimerEl = document.querySelector('.timer');

const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: containerTimerEl.querySelector('span[data-days]'),
  dataHours: containerTimerEl.querySelector('span[data-hours]'),
  dataMinutes: containerTimerEl.querySelector('span[data-minutes]'),
  dataSeconds: containerTimerEl.querySelector('span[data-seconds]'),
};

let selectedDate = null;
let timerId = null;

//! Инициализация Библиотеки
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkingDateFuture(selectedDates);
  },
};
flatpickr(refs.input, options);

// Работа с кнопкой
const hideButtonStart = () => {
  refs.startBtn.setAttribute('disabled', 'disabled');
};
hideButtonStart();

const showButtonStart = () => {
  refs.startBtn.removeAttribute('disabled', 'disabled');
};

//Проверка даты на будущее
const checkingDateFuture = selectedDates => {
  selectedDate = selectedDates[selectedDates.length - 1];
  if (selectedDate <= Date.now()) {
    Notify.failure('Please choose a date in the future');
    hideButtonStart();
  } else {
    showButtonStart();
  }
};

// хендлер для евентлистнера
const onStartBtnClick = e => {
  timerId = setInterval(() => {
    const currentTime = Date.now();
    const timeLeft = selectedDate - currentTime;
    const time = convertMs(timeLeft);
    updateTime(time);
    if (timeLeft < 1000) {
      clearInterval(timerId);
    }
  }, 1000);
};

// функция конвертор мс
const convertMs = ms => {
  // Количество миллисекунд в единицу времени
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Оставшиеся дни
  const days = addLeadingZero(Math.floor(ms / day));
  // Оставшиеся часы
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Оставшиеся минуты
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Оставшиеся секунды
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

//Обновляет разметку таймера
const updateTime = ({ days, hours, minutes, seconds }) => {
  refs.dataDays.textContent = days;
  refs.dataHours.textContent = hours;
  refs.dataMinutes.textContent = minutes;
  refs.dataSeconds.textContent = seconds;
};

const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

// Добавляем слушателя на кнопку
refs.startBtn.addEventListener('click', onStartBtnClick);
