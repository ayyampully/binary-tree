from Node import Node


class Tree:
    def __init__(self):
        self.root = None

    def add_node(self, val):
        if self.root is None:
            self.root = Node(val)
        else:
            self.root.add_node(val)

    def print_tree(self):
        if self.root is not None:
            self.root.print_value()

    def find_one(self, val):
        if self.root is not None:
            return self.root.find(val)
        else:
            return None

    def find_common(self, a, b):
        node_a = self.find_one(a)
        if node_a is None:
            return None
        a_parent_node = self.find_one(node_a.parent)
        if a_parent_node is None:
            return None
        found = a_parent_node.find(b)
        if found is not None:
            return a_parent_node
        else:
            return self.find_common(node_a.parent, b)

