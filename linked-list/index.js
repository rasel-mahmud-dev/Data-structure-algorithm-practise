class Node {
    constructor(element) {
        this.next = null
        this.element = element
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(element){
        const node = new Node(element)
        if(this.head === null){
            return this.head = node
        }

        let current = this.head
        //  iterate last node
        while(current.next){
            current = current.next
        }
        current.next = node
    }
}
let newLinkedList = new LinkedList()
newLinkedList.add(3)
newLinkedList.add(4)
console.log(newLinkedList)