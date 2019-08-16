import run from '..';
import random from '../utilities';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num, index = 5) => {
  if (num < 2) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  if (num % index === 0 || num % (index + 2) === 0) {
    const newIndex = index + 6;
    isPrime(num, newIndex);
  }
  return true;
};

const gameData = () => {
  const question = random(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => run(description, gameData);
