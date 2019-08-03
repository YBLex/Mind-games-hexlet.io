import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
export const brainEvenInstruction = () => console.log('Answer "yes" if number is even otherwise answer "no".');
export const brainCalcInstruction = () => console.log('What is the result of the expression?');
const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const rounder = (func, round) => {
  for (let i = 1; i <= round; i += 1) {
    func();
  }
};

let userName;

const makeUserName = () => {
  userName = readlineSync.question('May I have your name? ');
};

export const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

const generateNumber = (max, min) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

export const askQuestion = () => {
  const number = generateNumber(1, 10);
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

export const generateExpression = () => {
  const signs = ['+', '-', '*'];
  const num1 = generateNumber(1, 10);
  const num2 = generateNumber(1, 10);
  const randIndex = Math.floor(Math.random() * signs.length);
  const randSign = signs[randIndex];
  const expression = `${num1} ${randSign} ${num2}`;
  let result;
  switch (randSign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      console.log('Uups, somethig happened');
  }
  console.log(`Question: ${expression} `);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === String(result)) {
    return console.log('Correct!');
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log(`Let's try again, ${userName}!`);
  return generateExpression();
};

export const runGame = (gameInstuction, gameLogic) => {
  console.log(greeting);
  gameInstuction();
  makeUserName();
  sayHello(userName);
  rounder(gameLogic, 3);
  return console.log(`Congratulations, ${userName}!`);
};
