const args = process.argv.slice(2);

const alarmBeep = (seconds) => {
  if (seconds < 0 || isNaN(seconds)) {
    console.log(`Invalid input: ${seconds}. Skipping.`);
    return;
  }

  setTimeout(() => {
    process.stdout.write('\x07'); // Beep
    console.log(`Beep at ${seconds} seconds`);
  }, seconds * 1000);
};

for (const arg of args) {
  const seconds = parseInt(arg);
  alarmBeep(seconds);
}








