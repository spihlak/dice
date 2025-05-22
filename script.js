const dice = document.getElementById("dice");
const btn = document.getElementById("diceRoll");

dice.textContent = 6;

btn.addEventListener("click", () => {
    dice.classList.add("fade");
    btn.classList.add("click");
    setTimeout(() => {
        num = Math.floor(Math.random() * 6) + 1;
        dice.textContent = num;
        dice.classList.remove("fade");
        btn.classList.remove("click");
    }, "300");
});