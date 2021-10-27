class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//iterative BFS solutions
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    inOrderSearch(root){
        /*
        10
        /  \
       6    12
      / \
     2   4
     output = [2,6,4,10,12]
     */
    //define a stack to keep track of visited nodes in tree
     const stack = [];
     const values = [];
     //current node is the root
     let node = root;
     //while stack has length >0 or theres a node
     while(stack.length || node){
         //while theres a node
         while(node){
             //push the node onto stack
             stack.push(node);
             //node gets reassigned to the left node
             //for inorder search, we need to traverse as far to the left, 
             //pushing each node to the stack as we go
             node = node.left
            }
        //we break out of while loop once there are no more nodes to the left
        //the node is now the last item on the stack(the leftmost node)
        node = stack.pop();
        //push the nodes value on the values array to return
        values.push(node.value);
        //we now traverse to the right of tree, and so on
        node = node.right;
     }
     return values;
    }
    preorderSearch(root){
        /*
            10
           /  \
          6    12
         / \
        2   4
        output = [10,6,2,4,12]
        */
        const stack = [];
        const values = [];
        let node = root;
        while(stack.length || node){
            while(node){
                stack.push(node);
                values.push(node.value);
                node = node.left
            }
            node = stack.pop();
            node = node.right;
        }
        return values;
    }
    postorderSearch(root){
        /*
            10
           /  \
          6    12
         / \
        2   4
        output = [10,6,2,4,12]
        */
       //start with root in stack, so stack has length
        const stack = [root];
        const values = [];
        //while stack has a length > 0
        while(stack.length){
            //current node is last item in stack
            let node = stack.pop();
            //if there's a left node, push it to stack
            if(node.left){
                stack.push(node.left);
            }
            //if there's a right node, push to stack
            if(node.right){
                stack.push(node.right)
            }
            //add each current node value to the front of 
            //the values array
            values.unshift(node.value)

        }
        return values;
    }
}