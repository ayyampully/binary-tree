package com.tree;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {
    private static Logger logger = Logger.getLogger("main");
    public static void main(String[] args){
        logger.log(Level.INFO, "Main");
        final Tree tree = new Tree();
        tree.addNode(5);
        tree.addNode(3);
        tree.addNode(4);
        tree.addNode(8);
        tree.addNode(14);
        tree.addNode(5);
        tree.addNode(6);
        tree.addNode(1);
        tree.addNode(2);
        tree.print();
        Node n = tree.findCommon(2, 4);
        logger.log(Level.INFO, "found - value = {0}", n.getValue());
    }
}
