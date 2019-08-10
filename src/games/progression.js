import run from '..';
import random from '../utilities';

const description = 'What number is missing in the progression?';

const generateProgression = (firstElement, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    const currentElement = firstElement + step * i;
    result.push(currentElement);
  }
  return result;
};

const gameData = () => {
  const firstProgressionElement = random(1, 20);
  const progressionStep = random(1, 7);
  const progressionLength = 10;
  const progressoin = generateProgression(firstProgressionElement, progressionStep,
    progressionLength);
  const hiddenElementIndex = random(0, progressionLength);
  const answer = String(progressoin[hiddenElementIndex]);
  progressoin[hiddenElementIndex] = '..';
  const question = progressoin.join(' ');

  return { question, answer };
};

export default () => run(description, gameData);
