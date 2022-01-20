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
/*
Time complexity: O(n log n)
Space: O(n) - creating an array with all node values takes O(n) space. The size is exponentially growing.
In solution below, it is O(1) space since we are not generating a new list.
*/


/*
optimized approach - utilizing MergeTwoLists (divide and concquer)

1. Pair up N lists and merge each pair ito a single sorted list
2. Pair up these sorted lists and merge each pair into a single sorted list
3. Repeat step 2 until one single sorted list of N linked lists is generated.
4. return merged list.
*/
function ListNode(val){
    this.val = val;
    this.next = null;
}

function mergeTwoLists(l1, l2){
    let p1 = l1;
    let p2 = l2;
    let previous = null;
    while(p1 !== null && p2 !== null){

        if(p1.value < p2.value){
            previous = p1;
            p1 = p1.next;
        } else {
            if(previous !== null) {
                previous.next = p2;
            }
            previous = p2;
            p2 = p2.next;
            previous.next = p1;
        };
    };
    if(p1 === null){
        previous.next = p2;
    };
    if(l1.value < l2.value){
        return l1;
    } else {
        return l2;
    };
}
function mergeNLists(lists){
    if(lists.length === 0){
        return null
    }
    let interval = 1;
    //interval keeps track of hoy many times we are merging
    while (lists.length > interval){
        let idx = 0;

        while(idx + interval < lists.length){
            lists[idx] = mergeTwoLists(lists[idx], lists[idx + interval]);
            idx += interval * 2
        }
        interval *= 2
    }
    return lists[0]
}
/*
n - total number of nodes in an input array
N - total number of linked lists in an input array
Time Complexity: O(n log N)

-outer while loop which runs until one merged list is created O(lon N)
-processing all nodes in linked lists O(n)

Space complexity: O(1)
-Merging N sorted Linked lists O(1).
*/