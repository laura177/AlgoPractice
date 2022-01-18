/*
Merge N Sorted Linked Lists

Write a function that takes in the hears of N Sorted Single Linked Lists
and return the merged list.
The merged list should be in sorted order.

Each Linked List node has an integer value as well as a next node 
pointing to the next node in the list or to none/null
if it is the tail of the list.

EXAMPLE:
Input =
[
  1->5->7,
  1->2->4->8,
  3->6->8
]

Output = 1->1->2->3->4->5->6->7->8->8

//Brute force approach:
1. Iterate over all the linked lists in the input array and insert node values in an array
2. sort array in ascending order
3. initialize a new linked list and iterate over this sorted array
   and create a new node for each value and add it to the linked list
4. Return the merged list.
*/



function ListNode(val) {
    this.val = val;
    this.next = null;
}

function mergeNLists(lists){
    let nodes = [];

    for(let i = 0; i < lists.length; i++){
        let currentList = lists[i];
        while(currentList !== null){
            nodes.push(currentList.value);
            currentList = currentList.next;
        }
    }
    nodes.sort((a,b) => a-b);
    let mergedList = new ListNode(0);
    let currentNode = mergedList;
    for(let i = 0; i < nodes.length; i++){
        currentNode.next = newListNode(nodes[i]);
        currentNode = currentNode.next;
    }
    return mergedList.next;
}