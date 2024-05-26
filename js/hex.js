const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorName = document.querySelector(".color-name");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getrandomColor()];
  }

  console.log(hexColor);

  document.body.style.backgroundColor = hexColor;
  colorName.textContent = hexColor;
});

function getrandomColor() {
  return Math.floor(Math.random() * hex.length);
}
