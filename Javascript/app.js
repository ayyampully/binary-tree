import Tree from "./tree.js";
const tree = new Tree();

for (let i = 0; i < 10; i++) {
  let n = Math.ceil(Math.random() * 50);
  tree.addValue(n);
}
//tree.print();
tree.render();

document.querySelectorAll("span").forEach(span => {
  span.addEventListener("click", findParent);
});
let a = 0;
let b = 0;
function findParent(e) {
  if (!a) {
    a = parseInt(e.target.innerText);
    e.target.classList.add("badge", "badge-warning");
  } else if (a && !b) {
    b = parseInt(e.target.innerText);
    e.target.classList.add("badge", "badge-warning");
  }
  document.querySelector(".selection-a").innerText = a;
  document.querySelector(".selection-b").innerText = b;
}
document.querySelector(".find").addEventListener("click", e => {
  const { value } = tree.findCommon(a, b);
  const elm = document.getElementById(`parent-${value}`);
  elm.children[0].classList.add("badge", "badge-success", "px-5");
});
