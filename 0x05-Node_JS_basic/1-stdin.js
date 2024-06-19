// #!/usr/bin/env node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  // Interactive mode
  process.stdin.on('data', (name) => {
    process.stdout.write(`Your name is: ${name.toString().trim()}\n`);
    //process.stdout.write('This important software is now closing\n');
    process.exit();
  });
} else {
  // Non-interactive mode
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
  });

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
