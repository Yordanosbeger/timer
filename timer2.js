const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const handleUserInput = (input) => {
  if (input === 'b') {
    process.stdout.write('\x07'); // Beep immediately
  } else if (parseInt(input) >= 1 && parseInt(input) <= 9) {
    const seconds = parseInt(input);
    console.log(`Setting timer for ${seconds} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07'); // Beep after the specified seconds
      console.log(`Timer set for ${seconds} seconds.`);
    }, seconds * 1000);
  }
};

rl.on('line', (input) => {
  if (input === 'exit' || input === 'quit' || input === 'q') {
    console.log('Thanks for using me, ciao!');
    rl.close();
  } else {
    handleUserInput(input);
  }
});

console.log('Welcome to the interactive timer!');
console.log('Press b for an immediate beep.');
console.log('Enter a number from 1 to 9 to set a timer for that many seconds.');
console.log('Press Ctrl+C to exit the program.');
