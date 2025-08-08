const Time = document.getElementById("time");
const countContainer = document.getElementById("count");
const tickContainer = document.getElementById("tick");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

// showTime.style.marginTop = "20px";
// showTime.style.fontSize = "30px";
// showTime.style.textAlign = "center";
// showTime.style.color = "blue";

// setInterval(updateTime, 1000);

// function updateTime() {
//   const now = new Date();
//   showTime.textContent =
//     now.toLocaleTimeString() + " - " + now.toLocaleDateString();
// }

// setInterval(updateCount, 2000);
// let count = 0;

// function updateCount() {
//   count += 2;
//   countContainer.textContent = `Count: ${count}`;
// }

// setInterval(updatetick, 1000);

// let tick = 0;

// function updatetick() {
//   if (tick < 1) {
//     tickContainer.textContent = `Tick: Zero`;
//     tick++;
//   } else {
//     tickContainer.textContent = `Tick: ${tick}`;
//     tick++;
//   }
//
// function currentTime() {
//   let time = new Date().toLocaleTimeString();
//   //   console.log(time);
// }

// setInterval(currentTime, 2000);

// next
// set interval is used to run a piece of code after certain period of time//

// let num = 0;
// function printNumber() {
//   num++;
//   // console.log(num);
// }

// setInterval(printNumber, 1000);

function Timer() {
  let time = new Date().toLocaleDateString();
  const timeElement = document.getElementById("time");
  timeElement.textcontent = time;
  // console.log(time);

  //   console.log(time);
}

setInterval(Timer, 1000);

// let count = 10;

function updateCount() {
  count + 10;
  // console.log(count);
}

// setInterval(updateCount, 1000);

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let index = 0;

const alphaContainer = document.getElementById("alphaContainer");

function letter() {
  if (index < alphabet.length) {
    alphaContainer.textContent = `${alphabet[index]}`;
    index++;
  } else {
    alphaContainer.textContent = "";
    index = 0;
  }
}

// setInterval(letter, 1000);

let count = 0;

// function updateCount() {
//   count++;
//   countContainer.textContent = `Count: ${count}`;
// }

// setInterval(updateCount, 1000);

function updateTime() {
  const time =
    new Date().toLocaleTimeString() + " - " + new Date().toLocaleDateString();
  // time = new Date().toLocaleDateString();
  Time.textContent = `Time: ${time}`;
}
// let interval = setInterval(() => {
//   updateTime();
//   updateCount();
//   letter();
// }, 1000);

// buttons
const btnStop = () => {
  clearInterval(interval);
};
start.addEventListener("click", () => {
  interval = setInterval(() => {
    updateTime();
    updateCount();
    letter();
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});
