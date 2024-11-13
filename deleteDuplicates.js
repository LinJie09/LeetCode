function ListNode(val,next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}



const deleteDuplicates = (head) =>{
    if(!head) return null;

    let current = head;
    let numList = {};
    numList[current.val] = 1;
    while(current !== null && current.next != null){
        if(numList[current.next.val]){
            current.next =current.next.next;
        }else{
            current = current.next;
            numList[current.val] = 1;
        }
    }
    return head;
}