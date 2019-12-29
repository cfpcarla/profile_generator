const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question('Whats your name? ', (answer) => {
  answers.name = answer;
  rl.question('Whats an activity you like doing? ',(answer) => {
    answers.activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.music = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        answers.favoriteMeal = answer;
        rl.question('Whats your favourite thing to eat for that meal? ', (answer) => {
          answers.favouriteFood = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            answers.sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              answers.superpowers = answer;

              console.log(`My name is ${answers.name}, I enjoy doing ${answers.activity}, my music favourite is ${answers.music}, my favorite meal is ${answers.favoriteMeal}, my favourite thing to eat is ${answers.favouriteFood}. My favourite sport is ${answers.sport}, and my superpowers is ${answers.superpowers}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});


