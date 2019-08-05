import run from '..';
import random from '../utilities';

const rules = 'What number is missing in the progression?';
const progressionLength = random(5, 10);
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
  const index = random(0, progressionLength);
  const answer = String(arr[index]);
  const question = (() => {
    arr[index] = '..';
    return arr.join(' ');
  })();

  return {
    question,
    answer,
  };
};

export default () => run(rules, gameData);
