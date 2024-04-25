let items = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKeys = "items";

function renderItem() {
  itemsDiv.innerHTML = null;

  for (const [idx, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.style.marginBottom = "10px";

    const text = document.createElement("p");
    text.style.display = "inline";
    text.style.marginRight = "10px";
    text.textContent = item;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => {
      removeItem(idx);
    };

    container.appendChild(text);
    container.appendChild(button);

    itemsDiv.appendChild(container);
  }
}

renderItem();

function loadItem() {
  const oldItems = localStorage.getItem(storageKeys);

  if (oldItems) {
    items = JSON.parse(oldItems);
    renderItem();
  }
}
function saveItem() {
  const stringItems = JSON.stringify(items);
  localStorage.setItem(storageKeys, stringItems);
}
function addItem() {
  const value = input.value;
  if (!value) {
    alert("You cannot add empty item");
    return;
  }
  items.push(value);
  renderItem();
  input.value = "";
  saveItem();
}
function removeItem(idx) {
  items.splice(idx, 1);
  renderItem();
  saveItem();
}

document.addEventListener("DOMContentLoaded", loadItem);
