import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};

let selectedData = null;

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
  selectedData = selectedDates[selectedDates.length - 1];
  if (selectedData < Date.now()) {
    Notify.failure('Please choose a date in the future');
    hideButtonStart();
  } else {
    showButtonStart();
  }
};
