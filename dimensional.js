let position = 0;
direction = 1;
function moveForward(distance) {
  position += distance * direction;
}
function moveBackward(distance) {
  position -= distance * direction;
}
function turnAround() {
  direction *= -1;
}
function printLocation() {
  console.log(position);
}

// moveForward(5);
// moveBackward(3);
// printLocation();
// turnAround();
// moveForward(10);
// moveBackward(5);
// printLocation();

let ns = 0;
let ew = 0;
let dir = 0;
function forward(dist) {
  switch (dir) {
    case 0:
      ns += dist;
      break;
    case 1:
      ew += dist;
      break;
    case 2:
      ns -= dist;
      break;
    default:
      ew -= dist;
  }
}
function backward(dist) {
  switch (dir) {
    case 0:
      ns -= dist;
      break;
    case 1:
      ew -= dist;
      break;
    case 2:
      ns += dist;
      break;
    default:
      ew += dist;
  }
}
function turnRight() {
  if (dir <= 2) dir++;
  else dir = 0;
}
function turnLeft() {
  if (dir >= 1) dir--;
  else dir = 3;
}
function printer() {
  switch (dir) {
    case 0:
      console.log(`^`);
      document.getElementById("compass").innerHTML = "^";
      break;
    case 1:
      console.log(`>`);
      document.getElementById("compass").innerHTML = ">";
      break;
    case 2:
      console.log(`v`);
      document.getElementById("compass").innerHTML = "v";
      break;
    default:
      console.log(`<`);
      document.getElementById("compass").innerHTML = "<";
      break;
  }
  console.log(`${ns} N ${ew} E`);
  document.getElementById("coord").innerHTML = `${ns} N ${ew} E`;
}

document.onkeypress = e => {
  //console.log(event.keyCode);
  if (event.keyCode === 119) forward(1);
  else if (event.keyCode === 115) backward(1);
  else if (event.keyCode === 97) turnLeft(1);
  else if (event.keyCode === 100) turnRight(1);
  printer();
};
console.log("where to? ");
console.log(" 0-N    1-E    2-S    3-W");
console.log(`W - Forward`);
console.log(`S - Backward`);
console.log(`A - Turn Left`);
console.log(`D - Turn Right`);
console.log();
// forward(5);
// turnRight();
// forward(2);
// printer();
// turnLeft();
// turnLeft();
// forward(7);
// turnRight();
// backward(3);
// printer();
