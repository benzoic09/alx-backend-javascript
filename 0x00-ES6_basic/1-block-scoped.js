export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // used vars
    const task2 = false; // used vars
  }

  return [task, task2];
}