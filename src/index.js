import readlineSync from 'readline-sync';

const roundsNumber = 3;

const runGame = (rules, gameData) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < roundsNumber; i += 1) {
    const data = gameData();
    console.log(`Question: ${data.question}?`);
    const usersAnswer = readlineSync.question('Your answer: ');

    if (data.answer === usersAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${data.answer}'`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
