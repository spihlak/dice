const dice = document.getElementById("dice");
const btn = document.getElementById("diceRoll");
const face = document.getElementById("diceFace");

initDice(6);

btn.addEventListener("click", () => {
    dice.classList.add("fade");
    btn.classList.add("click");
    face.removeAttribute("class");
    initDice(0);
    setTimeout(() => {
        num = Math.floor(Math.random() * 6) + 1;
        initDice(num);
        dice.classList.remove("fade");
        btn.classList.remove("click");
    }, "300");
});

function initDice(num) {
    if(num > 0) {
    face.classList.add("df-"+ num +"-dots");
        for (let i = 0; i < num; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            face.appendChild(dot);
        }
    } else {
        let dots = document.querySelectorAll(".dot");
        dots.forEach(dot => {
            dot.remove();
        });
    }
}