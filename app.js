let dieDiv = document.getElementById("dice-container");
let allDice = [];
class Die {
  constructor() {
    this.value = 0;
    this.die = document.createElement("div");
    dieDiv.appendChild(this.die);
    this.die.classList.add("die");
    this.roll();
    allDice.push(this);
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
