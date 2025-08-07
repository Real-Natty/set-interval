const Time = document.getElementById("time");
const countContainer = document.getElementById("count");
const tickContainer = document.getElementById("tick");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const alphaContainer = document.getElementById("alphaContainer");

let alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphaLenght = alphabet.length;
let currentCount = 0;

function letter() {
  if (currentCount < alphabet.length) {
    alphaContainer.textContent = `${alphabet[currentCount]}`;
    currentCount++;
  } else {
    alphaContainer.textContent = "";
    currentCount = 0;
  }
}

function updateTime() {
  const time =
    new Date().toLocaleTimeString() + " - " + new Date().toLocaleDateString();

  Time.textContent = `Time: ${time}`;
}

start.addEventListener("click", () => {
  let lastAlphabet = alphabet.charAt(alphaLenght);
  let currentAlphabet = alphabet.charAt(currentCount);
  interval = setInterval(() => {
    updateTime();
    letter();
    lastAlphabet = alphabet.charAt(alphaLenght);
    currentAlphabet = alphabet.charAt(currentCount);

    if (currentAlphabet === lastAlphabet) {
      clearInterval(interval);
      currentCount = 0;
    }
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  currentCount = 0;
});
