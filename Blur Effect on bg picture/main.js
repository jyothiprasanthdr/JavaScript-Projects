let load = 0;
let init = setInterval(changeLoad, 30);

const loadItem = document.querySelector(".loaded-text");
const bg = document.querySelector(".bg");

function changeLoad() {
  load++;
  if (load > 99) {
    clearInterval(init);
  }
  console.log(load);
  loadItem.innerText = `${load}%`;
  loadItem.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 1)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
