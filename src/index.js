import readlineSync from 'readline-sync';

const roundsNumber = 3;

const runGame = (description, gameData) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < roundsNumber; i += 1) {
    const { question: gameQuestion, answer: expectedAnswer } = gameData();
    console.log(`Question: ${gameQuestion}?`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (expectedAnswer === usersAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
