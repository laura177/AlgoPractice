class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    breadthFirstSearch(array) {
        //queue - first in first out []
        //current node - first node in queue, then add to list (shift)
        //then push the name of node to array
        const queue = [this];
        while(queue.length){
            const currentNode = queue.shift();
            array.push(currentNode.name)
            //traverse current node to next level(children) 
            //and add to queue
            for(const child of currentNode.children){
                queue.push(child)
            }
        }
        return array
    }
}
/*
graph =    A
         / | \
        B  C  D
      / |    / \
     E  F   G   H
       / \   \
      I   J   K

    OUTPUT:
       ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'] 

Time: O(v + e)
Space: O(v)
v is the number of vertices of input graph
e is number edges of input graph
*/