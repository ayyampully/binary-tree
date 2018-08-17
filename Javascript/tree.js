import Node from "./node.js";

class Tree {
  constructor() {
    this.root = null;
  }
  addValue(val) {
    let n = new Node(val);
    if (this.root) {
      this.root.addNode(n);
    } else {
      this.root = n;
    }
  }
  print() {
    this.root.print();
  }
  findNode(val) {
    return this.root.find(val);
  }
  findCommon(a, b) {
    const node = this.findNode(a);
    if (!node) return null;
    const np = this.findNode(node.parent);
    if (!np) return null;
    const found = np.find(b);
    if (found) {
      return np;
    } else {
      return this.findCommon(node.parent, b);
    }
  }
  render() {
    if (this.root) {
      this.root.render();
    }
  }
}
export default Tree;
