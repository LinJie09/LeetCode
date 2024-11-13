
class listNode{
    constructor(val = 0,next = null){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const mergeTwoLists = (list1,list2) =>{
    let dummyHead = new listNode(0);
    let currentNode = dummyHead;
    while(list1 !== null && list2 !== null){
        if(list1.val > list2.val){
            currentNode.next = list2;
            list2 = list2.next
        }else{
            currentNode.next = list1;
            list1 = list1.next
        }
        currentNode = currentNode.next
    }
    if(list1 !== null){
        currentNode.next = list1;
    }else if (list2 !== null){
        currentNode.next = list2;
    }

    return dummyHead.next;
}
