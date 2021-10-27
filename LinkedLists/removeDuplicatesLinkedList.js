class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    let nextNode = currentNode.next;
  
    //loop through while current node is not null
    while(currentNode){
  
      //while there is a next node AND while current value and next value are equal, we want to skip over the next node (which is the duplicate value)
      while(nextNode && currentNode.value === nextNode.value){
  
        //skip over the duplicate node value by moving to the next one
        nextNode = nextNode.next
      }
  
      //change the reference to current node's next node to make sure it's the distinct value node
      currentNode.next = nextNode
  
      //move along the linked list and continue with the outer while loop
      currentNode = nextNode
      }
    return linkedList;
  }
  