import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const evenStart = () => console.log('Answer "yes" if number is even otherwise answer "no".');

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

let userName;
const makeUserName = () => {
  userName = readlineSync.question('May I have your name? ');
};

export const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

const generateNumber = () => {
  const min = 1;
  const max = 50;
  const rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return rand;
};

export const askQuestion = () => {
  const number = generateNumber();
  console.log(`Question: ${number} `);
  const userAnswer = readlineSync.question('Your answer: ');
  if ((isEven(number) && userAnswer === 'yes')
    || (!isEven(number) && userAnswer === 'no')) {
    return console.log('Correct!');
  }
  const anotherAnswer = userAnswer === 'yes' ? 'no' : 'yes';
  if (userAnswer === 'yes' || userAnswer === 'no') {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${anotherAnswer}'.`);
    return askQuestion();
  }
  console.log(`${userAnswer} is not and answer. Try again!`);
  return askQuestion();
};

export const startGame = () => {
  welcome();
  evenStart();
  makeUserName();
  sayHello(userName);
  for (let i = 0; i < 3; i += 1) {
    askQuestion();
  }
  return console.log(`Congratulations, ${userName}!`);
};
