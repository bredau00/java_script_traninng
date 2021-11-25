// let grade = 99;
// if (grade >= 80 && grade <= 100) {
//   document.write("you got an A, pass");
// } else if (grade >= 70 && grade <= 79) {
//   document.write("You got a B, pass");
// } else if (grade >= 50 && grade <= 69) {
//   document.write("you got a C, pass");
// } else if (grade >= 0 && grade <= 49) {
//   document.write("you got a D, better luck next time");
// } else {
//   document.write("error");
// }

function currentTime() {
  let time = new Date();
  let hours = time.getHours();
  let mins = time.getMinutes();
  let sec = time.getSeconds();
  let acttime = hours + ":" + mins + ":" + sec;
  document.getElementById("clock").innerText = acttime;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();

function timeofday() {
  let time = new Date();
  let hours = time.getHours();
  if (hours >= 12 && hours <= 18) {
    document.write("Afternoon");
  } else if (hours >= 0 && hours < 12) {
    document.write("good morning");
  } else document.write("good evening");
  document.write("<br/>");
}
timeofday();

// let num = 10;
// for (let seth = 0; seth <= num; seth += 2) {
//   document.write(seth);
// }

const num1 = 2;
let sum = 0;
for (let x = 1; x <= 10; x++) {
  sum = num1 * x;
  document.write(num1 + "x" + x + "=" + sum);
  document.write("<br/><br/>");
}

let num = 1;
for (x = 100; x >= num; x--) {
  if (x % 5 == 0) {
    document.write(x + " <br/>");
  }
}
