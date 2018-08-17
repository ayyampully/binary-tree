class Node {
  constructor(val) {
    this.value = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
  render() {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.setAttribute("id", `parent-${this.value}`);
    let label = document.createElement("span");
    label.innerText = this.value;
    li.appendChild(label);
    ul.appendChild(li);
    if (this.parent) {
      document.querySelector(`#parent-${this.parent}`).appendChild(ul);
    } else {
      document.querySelector(".list").appendChild(ul);
    }
    if (this.left) this.left.render();
    if (this.right) this.right.render();
  }
  find(val) {
    if (this.value === val) {
      return this;
    } else if (val < this.value && this.left) {
      return this.left.find(val);
    } else if (val > this.value && this.right) {
      return this.right.find(val);
    }

    return null;
  }
  print() {
    if (this.left) this.left.print();
    console.log(this.value);
    if (this.right) this.right.print();
  }
  addNode(node) {
    node.parent = this.value;
    if (node.value > this.value) {
      if (this.right) {
        this.right.addNode(node);
      } else {
        this.right = node;
      }
    } else if (node.value < this.value) {
      if (this.left) {
        this.left.addNode(node);
      } else {
        this.left = node;
      }
    }
  }
}
export default Node;
