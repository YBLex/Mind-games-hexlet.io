import run from '..';
import random from '../utilities';

const description = 'What number is missing in the progression?';

const generateProgression = (firstElement, step, length) => {
  if (length - 1 === 0) {
    return firstElement;
  }
  const nextElement = firstElement + step;
  return `${String(firstElement)} ${generateProgression(nextElement, step, length - 1)}`;
};

const progressionLength = 10;
const gameData = () => {
  const progressionFirstElement = random(1, 20);
  const progressionStep = random(1, 7);
  const progressoin = generateProgression(progressionFirstElement, progressionStep,
    progressionLength).split(' ');
  const hiddenElementIndex = random(0, progressionLength);
  const answer = String(progressoin[hiddenElementIndex]);
  progressoin[hiddenElementIndex] = '..';
  const question = progressoin.join(' ');

  return { question, answer };
};

export default () => run(description, gameData);
