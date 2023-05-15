import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

const createsValueObject = e => {
  return {
    delay: e.target.elements.delay.valueAsNumber,
    step: e.target.elements.step.valueAsNumber,
    amount: e.target.elements.amount.valueAsNumber,
  };
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
    createPromises(position, delay).then(onSuccess).catch(onFailure).finally(onFinally);
    delay += step;
  }
};

function onCreatePromises(e) {
  e.preventDefault();

  promiseProcessing(createsValueObject(e));
}

const onSuccess = ({ position, delay }) => {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
};

const onFailure = ({ position, delay }) => {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
};

const onFinally = () => {
  formEl.reset();
};

formEl.addEventListener('submit', onCreatePromises);
