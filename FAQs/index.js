const dataArray = [
  {
    title: "Why is Javascript cool?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia pariatur veniam repellat, suscipit magni excepturi vero molestias ipsa, inventore rem? Fuga veritatis dicta nisi inventore nobis omnis, sequi necessitatibus!",
  },
  {
    title: "What is Javascript ?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia pariatur veniam repellat, suscipit magni excepturi vero molestias ipsa, inventore rem? Fuga veritatis dicta nisi inventore nobis omnis, sequi necessitatibus!",
  },
  {
    title: "How can I learn Javascript?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia pariatur veniam repellat, suscipit magni excepturi vero molestias ipsa, inventore rem? Fuga veritatis dicta nisi inventore nobis omnis, sequi necessitatibus!",
  },
];

const containerElement = document.getElementById("faq-container");

const makeHTML = (data) => {
  return `<details><summary>${data.title}</summary>
    <p>${data.detail}</p></details>`;
};
containerElement.innerHTML = dataArray
  .map((dataItem) => makeHTML(dataItem))
  .join("");
