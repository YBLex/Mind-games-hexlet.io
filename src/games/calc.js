import run from '..';
import random from '../utilities';

const description = 'What is the result of the expression?';

const operations = [
  (x, y) => ({ answer: String(x - y), question: `${x} - ${y}` }),
  (x, y) => ({ answer: String(x + y), question: `${x} + ${y}` }),
  (x, y) => ({ answer: String(x * y), question: `${x} * ${y}` }),
];
const gameData = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);

  const { question, answer } = operations[random(0, operations.length - 1)](num1, num2);
  return { question, answer };
};

export default () => run(description, gameData);
