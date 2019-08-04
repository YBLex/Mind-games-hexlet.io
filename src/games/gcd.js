import run from '../index';
import random from '../utilities';

const rules = 'Find the greatest common divisor of given numbers.';

const findDivisor = (a, b) => {
  if (!b) {
    return String(a);
  }

  return findDivisor(b, a % b);
};

const gameData = () => {
  const num1 = random(1, 50);
  const num2 = random(1, 50);
  const question = `${num1} ${num2}`;
  const answer = findDivisor(num1, num2);
  return {
    question,
    answer,
  };
};

export default () => run(rules, gameData);
