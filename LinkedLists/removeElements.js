function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function removeElements(head, val){
    let curr = head;
    let prev = null;
    
    while(curr){
        if(curr.val === val){
          //when previous is null, we are either at the beginning of the list or the first values found were = target and removed
           if(prev === null){
		   /* you might be wondering why this validation, simple reason is to handle => [7,7,7,7] 7 */
       //therefore, we want to reassign head to the next node to remove the current value from the list
              head = curr.next;
           } else {
             //if there is a previous, removing the current node by pointing previous.next to current.next
              prev.next = curr.next;
           }
        } else {
          //move previous along when the value !== target
            prev = curr;
        }
        //move current along regardless to iterate through list
        curr = curr.next;
    }
    return head;
}