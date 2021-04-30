const showppingList = document.querySelector(".shopping__lists");
const btnColors = document.querySelectorAll(".showpping__btn");
const btnImages = document.querySelectorAll(".shopping__image")

let arr = [];
// const item = require("../data/item.js");
const item = [
  {
    sex: "man",
    size: "large",
    color: "blue",
    part: "p"
  },
  {
    sex: "female",
    size: "small",
    color: "yellow",
    part: "s"
  },
  {
    sex: "female",
    size: "small",
    color: "yellow",
    part: "s"
  },
  {
    sex: "female",
    size: "small",
    color: "yellow",
    part: "s"
  },
  {
    sex: "female",
    size: "small",
    color: "yellow",
    part: "s"
  },
  {
    sex: "female",
    size: "small",
    color: "yellow",
    part: "s"
  },
  {
    sex: "female",
    size: "small",
    color: "yellow",
    part: "s"
  },
  {
    sex: "female",
    size: "small",
    color: "yellow",
    part: "s"
  },
  {
    sex: "female",
    size: "small",
    color: "yellow",
    part: "s"
  },
  {
    sex: "female",
    size: "small",
    color: "yellow",
    part: "s"
  },
]

function viewItem(item) {
  item.forEach((e) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.src = `../img/${e.color}_${e.part}.png`;
    p.innerText = `${e.sex}, ${e.size} size`;
    li.appendChild(img);
    li.appendChild(p);
    showppingList.appendChild(li);
  });
  
}

function handleColorBtn(event) {
  const color = event.target.value;
  const temp = [];
  item.filter((e) => {
    if (e.color === color) {
      return temp.push(e);
    }
  })
  arr = temp;
  removeChildAll(showppingList);
  viewItem(arr);
}


function handleImageBtn(event) {
  event.preventDefault();

  // const sex = event.target.value;
  // console.log(sex);
    // const temp = [];
    // item.filter((e) => {
    //   if (e.sex === sex) {
    //     return temp.push(e);
    //   }
    // })
    // arr = temp;
    // removeChildAll(showppingList);
    // viewItem(arr);
}

function removeChildAll(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function init() {
  viewItem(item);
  Array.from(btnColors).forEach((btn) => btn.addEventListener("click", handleColorBtn));
  Array.from(btnImages).forEach((btn) => btn.addEventListener("submit", handleImageBtn));
}

init();