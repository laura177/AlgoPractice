class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

function mergeTwoLists(l1, l2){
    //define pointers to hold place in both lists
    let p1 = l1;
    let p2 = l2;
    //define a previous so we can redefine the nodes that will be accounted for
    let previous = null;

    //while we are still pointing to current node (not at the end)
    while(p1 !== null && p2 !== null){
        //if p1's value is less than p2's value,
        //assign previous to lesser node and move p1 to next node
        if(p1.value < p2.value){
            previous = p1;
            p1 = p1.next;
            //otherwise assign previous to p2 which is lesser value,
            //move p2 along to next node
            //previous's next node is p1 since that's the next value, move previous along
        } else {
            //if previous isn't the last node in the list, previous's next node is p2
            if(previous !== null) {
                previous.next = p2;
            }
            previous = p2;
            p2 = p2.next;
            previous.next = p1;
        };
    };
    //break out of the loop once we've gone thru p1 length
    //if there are any more value, the next values are in p2
    if(p1 === null){
        previous.next = p2;
    };
    //return whichever list is smallest value
    if(l1.value < l2.value){
        return l1;
    } else {
        return l2;
    };
}

//O(n + m) time ---> n is length of first list, m is length of second list
//O(1) space