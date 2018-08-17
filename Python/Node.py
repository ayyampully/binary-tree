

class Node:
    def __init__(self, val):
        self.value = val
        self.left = None
        self.right = None
        self.parent = None

    def add_node(self, val):
        if val < self.value:
            if self.left is None:
                self.left = Node(val)
                self.left.parent = self.value
            else:
                self.left.add_node(val)
        elif val > self.value:
            if self.right is None:
                self.right = Node(val)
                self.right.parent = self.value
            else:
                self.right.add_node(val)

    def find(self, val):
        print("val", val)
        if val == self.value:
            return self
        elif val < self.value:
            if self.left is not None:
                return self.left.find(val)
        elif val > self.value:
            if self.right is not None:
                return self.right.find(val)

    def print_value(self):
        if self.left is not None:
            self.left.print_value()
        print("value - ", self.value)
        if self.right is not None:
            self.right.print_value()

