const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null;

const onBtnStartClick = () => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.setAttribute('disabled', 'disabled');
};

const onBtnStopClick = () => {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
};

refs.startBtn.addEventListener('click', onBtnStartClick);
refs.stopBtn.addEventListener('click', onBtnStopClick);

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
