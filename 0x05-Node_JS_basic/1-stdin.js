#!/usr/bin/env node

const readline = require('readline');

if (process.stdin.isTTY) {
  // Interactive mode
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('Welcome to Holberton School, what is your name?');

  rl.question('', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });

  // rl.on('close', () => {
  // console.log('This important software is now closing');
  // });
} else {
  // Non-interactive mode
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
  });

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
