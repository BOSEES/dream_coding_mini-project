const loadItem = () => {
  return fetch("data/data.json")
  .then((res) => res.json())
  .then(json => json.items);
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => {
    return createHTMLstring(item);
  }).join("");
}

function createHTMLstring(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `
}

function onClickBtn(event, items) {
  const key = event.target.dataset.key;
  const value = event.target.dataset.value;
  if (key == null || value == null ) {
    return
  }
  displayItems(items.filter((e) => e[key] == value));
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onClickBtn(event, items));
}

loadItem()
.then((items) => {
  displayItems(items);
  setEventListeners(items);
})
.catch(console.log)