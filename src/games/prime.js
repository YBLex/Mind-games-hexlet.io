import run from '../index';
import random from '../utilities';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const gameData = () => {
  const number = random(1, 100);
  const question = number;
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => run(rules, gameData);
