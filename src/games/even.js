import run from '..';
import random from '../utilities';

const rules = 'Answer "yes" if number is even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const gameData = () => {
  const question = random(1, 10);
  const answer = isEven(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

export default () => run(rules, gameData);
