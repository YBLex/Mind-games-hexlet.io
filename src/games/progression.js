import run from '..';
import random from '../utilities';

const description = 'What number is missing in the progression?';

const generateProgression = (firstElement, step, length) => {
  const result = [];
  let currentElement = firstElement;
  for (let i = 0; i < length; i += 1) {
    currentElement = firstElement + step * i;
    result.push(currentElement);
  }
  return result;
};

const firstProgressionElement = random(1, 20);
const progressionStep = random(1, 7);
const gameData = () => {
  const arr = generateProgression(firstProgressionElement, progressionStep, 10);
  const progressinIndex = random(0, 10);
  const answer = String(arr[progressinIndex]);
  arr[progressinIndex] = '..';
  const question = arr.join(' ');

  return { question, answer };
};

export default () => run(description, gameData);
