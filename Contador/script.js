let count = 0;
let intervalId;
const counterElement = document.getElementById('counter');

function increment() {
  count++;
  counterElement.innerText = count;
}

function decrement() {
  if (count > 0) {
    count--;
    counterElement.innerText = count;
  }
}

function start() {
  intervalId = setInterval(increment, 1000); 
}

function stop() {
  clearInterval(intervalId);
}

function reset() {
  count = 0;
  counterElement.innerText = count;
  clearInterval(intervalId);
}
