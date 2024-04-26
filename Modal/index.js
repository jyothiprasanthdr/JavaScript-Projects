const openModalBtn = document.querySelector("#openModal");

const modalElement = document.querySelector(".modal");

const modalContent = modalElement.querySelector(".modal__content");

openModalBtn.addEventListener("click", () => {
  modalElement.classList.add("open");
});

modalContent.addEventListener("click", () => {
  modalElement.classList.remove("open");
});
