import run from '..';
import random from '../utilities';

const description = 'Answer "yes" if number is even. Otherwise answer "no".';

const isEven = num => num % 2 === 0;

const gameData = () => {
  const question = random(1, 10);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => run(description, gameData);
