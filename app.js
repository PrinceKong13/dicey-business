let dieDiv = document.getElementById("dice-container");
let allDice = [];
let diceSum = 0;
class Die {
  constructor() {
    this.value = 0;
    this.die = document.createElement("div");
    dieDiv.appendChild(this.die);
    this.die.classList.add("die");
    this.roll();
    allDice.push(this);
    this.die.addEventListener("click", () => this.roll())
  }

  roll() {
    this.value = Math.ceil(Math.random() * 6);
    this.die.textContent = this.value;
  }
}

let dieButton = document.getElementById("generateDie");
dieButton.addEventListener("click", () => {
  new Die();
  console.log(allDice);
});

let rollButton = document.getElementById("rollDiceBtn");
rollButton.addEventListener("click", () => {
  allDice.forEach(function(item) {
    item.roll();
  });
});

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", () => {
  diceSum = 0;
  allDice.forEach(function(item) {
    diceSum += item.value;
  })
  let diceSumDiv = document.getElementById("diceSum");
  diceSumDiv.textContent = `Total: ${diceSum}`;
})