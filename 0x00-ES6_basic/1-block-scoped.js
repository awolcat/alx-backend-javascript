/* eslint-disable no-unused-vars */
export default function taskBlock(trueOrFalse) {
  const task = true;
  const task2 = false;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
