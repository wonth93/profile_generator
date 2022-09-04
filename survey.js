const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are good too! ', (name) => {
  rl.question('What is your favourite activity? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('What is your favourite thing to eat for that meal? ', (thing) => {
          rl.question('What is your favourite sport? ', (sport) => {
            rl.question('What is your superpower? Amaze us! ', (superpower) => {
              console.log(`${name}'s favourite activity is ${activity}. ${name} listens to ${music} while doing that. ${name}'s favourite meal is ${meal} and loves eating ${thing}. ${name}'s favourite sport is ${sport} and ${superpower} is the superpower!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});