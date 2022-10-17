// Code your solutions in this file
function writeCards(arr, event) {
  const messages = [];
  for (let i = 0; i < arr.length; i++) {
    messages.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

function countDown(int) {
  let i = int;
  while (i > -1) {
    console.log(i);
    i--;
  }
}
