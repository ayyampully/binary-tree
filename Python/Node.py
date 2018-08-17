

class Node:
    def __init__(self, val):
        self.value = val
        self.left = None
        self.right = None
        self.parent = None

    def addNode(self, val):
        if val < self.value:
            self.left = Node(val)
        elif val > self.value:
