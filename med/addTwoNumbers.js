class ListNode{
    constructor(val,next = null){
        this.val = val;
        this.next = next;
    }   
}

const addTwoNumbers = (l1,l2) =>{
    let head = new ListNode(0);
    let current = head;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry > 0){
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum/10);
        let digit = sum % 10;
        current.next = new ListNode(digit);
        current = current.next;

        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
        
    }
    return head.next;
}