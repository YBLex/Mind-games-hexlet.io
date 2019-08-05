import run from '..';
import random from '../utilities';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
// Algotithm for finding if a number is prime with a sub-linear O(n) time
const isPrime = (num) => {
  if (num <= 1) return true;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

const gameData = () => {
  const question = random(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

export default () => run(rules, gameData);
