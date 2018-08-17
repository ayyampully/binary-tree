from Tree import Tree

tree = Tree()
tree.add_node(5)
tree.add_node(3)
tree.add_node(4)
tree.add_node(8)
tree.add_node(14)
tree.add_node(5)
tree.add_node(6)
tree.add_node(1)
tree.add_node(2)

tree.print_tree()
print(tree.find_common(2, 4).value)
