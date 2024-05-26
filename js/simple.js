const colors = ["blue", "red", "green", "yellow"];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color-name");

btn.addEventListener("click", () => {
  // LOGIC
  const randomColor = getrandomColor();

  document.body.style.backgroundColor = colors[randomColor];
  colorName.textContent = colors[randomColor];
  // console.log(randomColor);
});

// VALUE TO 'randomColor' variable
function getrandomColor() {
  return Math.floor(Math.random() * colors.length);
}
