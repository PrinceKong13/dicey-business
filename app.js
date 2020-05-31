let dieDiv = document.getElementById("dice-container");
let allDice = [];
let diceSum = 0;
let deletedDice = [];
let dieId = 0;

class Die {
  constructor(id) {
    this.id = id;
    this.value = 0;
    this.die = document.createElement("div");
    dieDiv.appendChild(this.die);
    this.die.classList.add("die");
    this.roll();
    allDice.push(this);
    this.die.addEventListener("click", () => this.roll());
    this.die.addEventListener("dblclick", () => this.remove());
  }

  roll() {
    this.value = Math.ceil(Math.random() * 6);
    this.die.textContent = this.value;
  }

  remove() {
    let targetDie = this;
    event.target.remove();
    allDice.forEach(function (item, index) {
      if (item === targetDie) {
        deletedDice = allDice.splice(index, 1);
      }
    });
  }
}

//Adds a button that generates another die on the page
let dieButton = document.getElementById("generateDie");
dieButton.addEventListener("click", () => {
  new Die(dieId);
  ++dieId;
});

//Adds a button that rolls all the dice
let rollButton = document.getElementById("rollDiceBtn");
rollButton.addEventListener("click", () => {
  allDice.forEach(function (item) {
    item.roll();
  });
});

//Adds a button that totals up the value of all currently showing dice
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  diceSum = 0;
  allDice.forEach(function (item) {
    diceSum += item.value;
  });
  let diceSumDiv = document.getElementById("diceSum");
  diceSumDiv.textContent = `Total: ${diceSum}`;
});
