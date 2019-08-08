import run from '..';
import random from '../utilities';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = () => {
  const result = [];
  let firstElem = random(1, 20);
  const step = random(1, 7);
  for (let i = 0; i < progressionLength; i += 1) {
    result.push(firstElem);
    firstElem += step;
  }
  return result;
};

const gameData = () => {
  const arr = generateProgression();
  const progressinIndex = random(0, progressionLength);
  const answer = String(arr[progressinIndex]);
  arr[progressinIndex] = '..';
  const question = arr.join(' ');

  return { question, answer };
};

export default () => run(description, gameData);
