import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

const createsValueObject = () => {
  return (optionsValue = {
    delay: formEl.elements.delay.valueAsNumber,
    step: formEl.elements.step.valueAsNumber,
    amount: formEl.elements.amount.valueAsNumber,
  });
};

const createPromises = (position, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const promiseProcessing = ({ delay, step, amount }) => {
  for (let position = 1; position <= amount; position += 1) {
    createPromises(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        formEl.reset();
      });
    delay += step;
  }
};

function onCreatePromises(e) {
  e.preventDefault();
  createsValueObject();
  promiseProcessing(optionsValue);
}

formEl.addEventListener('submit', onCreatePromises);
