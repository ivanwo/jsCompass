// // ---- RECTANGULAR.JS ----  //  //

// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }
//   getArea() {
//     return this.length * this.width;
//   }
//   getPerimeter() {
//     return 2 * (this.length + this.width);
//   }
//   toString() {
//     return `${this.length}x${
//       this.width
//     } Rectangle with area ${this.getArea()} perimeter ${this.getPerimeter()}`;
//   }
// }

// let rectArray = [];
// rectArray.push(new Rectangle(2, 4));
// rectArray.push(new Rectangle(5, 2));
// rectArray.push(new Rectangle(7, 10));
// rectArray.push(new Rectangle(2, 12));

// let sum = 0;
// for (const rect of rectArray) {
//   console.log(rect.toString());
//   sum += rect.getArea();
// }
// console.log(`sum of rectangles: ${sum}`);

// let greatArea = [];
// greatArea = rectArray.filter(rect => rect.getArea() >= 10);
// console.log(`Rectangles with Area greater than or equal to ten:`);
// console.log(greatArea);

// console.log(`rectangles with Area less than ten:`);
// console.log(rectArray.filter(rect => rect.getArea() < 10));

// --- Part Two: Players  ---  //

class Player {
  constructor(name, jerseyNum) {
    this.name = name;
    this.jerseyNum = jerseyNum;
    this.points = 0;
  }
  score(pointScored) {
    this.points += pointScored;
    console.log(
      `${this.name} has scored ${pointScored} points! this brings them to ${this.points} total points this season!`
    );
  }
}

class BaseballPlayer extends Player {
  constructor(name, jerseyNum, battingAvg) {
    super(name, jerseyNum);
    this.battingAvg = battingAvg;
  }
}
let bp = new BaseballPlayer("leroy", 99, 300);

class Team {
  constructor(name, city = "None") {
    this.name = name;
    this.city = city;
    this.players = [];
  }
  roster() {
    console.log(`TEAM ${this.name} FROM ${this.city}`);
    console.log(`ROSTER: `);
    for (const player of this.players) {
      console.log(
        `#${player.jerseyNum} : ${player.name} ~ total points scored: ${player.points}`
      );
    }
    console.log();
  }
}

let ravens = new Team("ravens", "hamtramck");
let magpies = new Team("magpies");

ravens.players.push(new Player("abdul", 9));
ravens.players.push(new Player("david", 404));
magpies.players.push(new Player("sarah", 22));
magpies.players.push(new Player("mysterious stranger", 0));

console.log();
console.log(`/-/ CURRENT LEAGUE STATUS  /-/`);
ravens.roster();
magpies.roster();

magpies.players[0].score(2);
