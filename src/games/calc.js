import run from '..';
import random from '../utilities';

const rules = 'What is the result of the expression?';

const gameData = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const elements = [
    (x, y) => ({ answer: String(x - y), question: `${x} - ${y}` }),
    (x, y) => ({ answer: String(x + y), question: `${x} + ${y}` }),
    (x, y) => ({ answer: String(x * y), question: `${x} * ${y}` }),
  ];

  const data = elements[random(0, elements.length - 1)](num1, num2);
  const { question, answer } = data;
  return {
    question,
    answer,
  };
};

export default () => run(rules, gameData);
