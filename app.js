const colors = ["green", "red", "rgba(245,40,145)",
"#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // select random number between 0 - 3
    const randomNumber = 2;

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})