package com.tree;

import java.util.logging.Level;
import java.util.logging.Logger;

public class Node {
    private static Logger logger = Logger.getLogger("main");
    private Node left;
    private Node right;
    private int value;
    private int parent;
    Node(int val){
        this.left = null;
        this.right = null;
        this.value = val;
    }

    public int getValue() {
        return value;
    }

    public int getParent() {
        return parent;
    }

    private void setParent(int parent) {
        this.parent = parent;
    }

    public void addNode(int val){
        if(val < this.value){
            if(this.left == null){
                this.left = new Node(val);
                this.left.setParent(this.value);
            }else{
                this.left.addNode(val);
            }
        }else if(val > this.value){
            if(this.right == null){
                this.right = new Node(val);
                this.right.setParent(this.value);
            }else{
                this.right.addNode(val);
            }
        }
    }
    public Node find(int val){
        if(this.value == val){
            return this;
        } else if(val < this.value && this.left != null){
            return this.left.find(val);
        } else if(val > this.value && this.right != null){
            return this.right.find(val);
        }
        return null;
    }
    public void print(){
        if(this.left != null) this.left.print();
        logger.log(Level.INFO, "--------------- Value ---------------------------> {0}", this.value);
        if(this.right != null) this.right.print();
    }
}
