let count = 0;
let limit = 20;

const val = document.getElementById("val");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

function updateCounter() {
  if (count < 0) count = 0;

  if (limit < count) count = limit;
  val.textContent = count;
  document.body.style.setProperty(
    "background-color",
    `rgb(${(count / limit) * 255},64,0)`
  );
}

plus.addEventListener("click", () => {
  count++;
  updateCounter();
});

minus.addEventListener("click", () => {
  count--;
  updateCounter();
});

updateCounter();
