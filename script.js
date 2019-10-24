// function x() {
//   let m = [0, 1, 0, 0];
//   console.log(`mamma mia!! ${m}`);
// }
// x();
//
// function sayHello(name) {
//   return (greeting = function(message) {
//     return `${message} ${name}`;
//   });
// }
// let hiKris = sayHello("Kris");
// console.log(hiKris("how are you"));

//  // ---- C L O S U R E S ---- //  //
{
  function counterFactory(name) {
    let count = 0;
    let space = "";

    function next() {
      count++;
      space += " ";
      console.log(`${name} ${space} ${count}`);
    }
    return next;
  }
  let counterA = counterFactory("A");
  let counterB = counterFactory("B");

  for (let i = 0; i < 3; i++) counterA();
}
//  // ----  ...rest parameters  ----  //  //
{
  function add(a, b, c) {
    return a + b + c;
  }
  console.log();
  console.log(add(1, 4, -2));

  function restAdd(...nums) {
    let sum = 0;
    for (const n of nums) {
      sum += n;
    }
    return sum;
  }

  console.log();
  console.log(restAdd(1, 4, 6, 7, 1));

  function wallet(owner, type, ...bills) {
    let sum = 0;
    for (const b of bills) {
      sum += b;
    }
    return `${owner} has ${sum} dollars in the ${type} wallet`;
  }

  console.log();
  console.log(wallet("mitch", "leather", 1, 1, 1, 1, 1, 5));
}

//  //  ---- default parameters ----  //  //
{
  function greet(name, greet = "yo") {
    console.log();
    console.log(`${greet} ${name}`);
  }
  greet("david", "hi");
  greet("mitch");
}

// //  ---- do...while  ----  //  //
// all commented out because prompts and alerts are really annoying
{
  // let winningNumber = 5;
  // let guess;
  // while (guess !== winningNumber) {
  //   guess = Number(prompt("guess"));
  // }
  // // do {
  // let guess = Number(prompt("what's the number?"));
  // } while (winningNumber !== guess);
  // alert("you've done it!");
}
