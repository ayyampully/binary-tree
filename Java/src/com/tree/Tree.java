package com.tree;

public class Tree {
    private Node root;
    Tree(){
        root = null;
    }
    public void addNode(int val){
        if(root == null){
            root = new Node(val);
        }else{
            root.addNode(val);
        }
    }
    public void print(){
        if(this.root != null){
            this.root.print();
        }
    }
    public Node find(int val){
        return this.root.find(val);
    }
    public Node findCommon(int a, int b){
        Node node = this.find(a);
        if (node == null){return null;}
        Node nodeParent = this.find(node.getParent());
        if (nodeParent == null) return null;
        Node found = nodeParent.find(b);
        if (found != null) {
            return nodeParent;
        } else {
            return this.findCommon(node.getParent(), b);
        }
    }
}
