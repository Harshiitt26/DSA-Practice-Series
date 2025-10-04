// DAY 12 -> STACK , QUEUE , LINKEDLIST Implementation All Variations.
// 1->  Implement STACK using Array.
class Stack{
    constructor(){
        this.stack = new Array()
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        if(this.isEmpty()) return null
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()) return null
        return this.stack[this.size() -1]
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.stack.length
    }
    print(){
        let result = ""
        for(let val of this.stack){
            result += val + "-"
        }
        return result += "Top"
    }
}


// 2 ->  Implement STACK using Object.
class Stack2{
    constructor(){
        this.stack = new Object()
        this.top = 0
    }
    push(val){
        this.stack[this.top] = val
        this.top++
    }
    pop(){
        if(this.isEmpty()) return null
        this.top--
        let removedVal = this.stack[this.top]
        delete this.stack[this.top]
        return removedVal
        
    }
    peek(){
        if(this.isEmpty()) return null
        return this.stack[this.top -1]
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.top 
    }
    print(){
        let result = ""
        for(let i = 0 ; i < this.top ; i++){
            result += this.stack[i] + "-"
        }
        return result + "Top"
    }
}


// 3 ->  Implement STACK using Singly LinkedList.
class Stack3{
    constructor(){
        this.top = null
        this.size = 0
    }
    push(val){
        // prepend
        const node = new Node(val)
        node.next = this.top
        this.top = node
        this.size++
    }
    pop(){
        // removeFirst
        if(!this.top) return null
        let removedVal = this.top.value
        this.top = this.top.next
        this.size--
        return removedVal
    }
    peek(){
        if(!this.top) return null
        return this.top.value
    }
    isEmpty(){
        return this.size === 0
    }
}


// 4 ->  Implement QUEUE using Array.
class Queue{
    constructor(){
        this.queue = new Array()
    }
    enqueue(val){
        this.queue.push(val)
    }
    dequeue(){
        if(this.isEmpty()) return null
        return this.queue.shift()
    }
    peek(){
        if(this.isEmpty()) return null
        return this.queue[0]
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.queue.length
    }
    print(){
        let result = ""
        for(let val of this.queue){
            result += val + " "
        }
        return result.trim()
    }
}


// 5 ->  Implement QUEUE using Object.
class Queue2{
    constructor(){
        this.queue = new Object()
        this.front = 0
        this.rear = 0
    }
    enqueue(val){
        this.queue[this.rear] = val
        this.rear++
    }
    dequeue(){
        if(this.isEmpty()) return null
        let removedVal = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return removedVal
    }
    peek(){
        if(this.isEmpty()) return null
        return this.queue[this.front]
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.rear - this.front 
    }
    print(){
        let result = "Front-"
        for(let i = this.front ; i < this.rear ; i++){
            result += this.queue[i] + "-"
        }
        return result + "Rear"
    }
}


// 6 ->  Implement QUEUE using 2 Stacks.
class Queue3{
    constructor(){
        this.s1 = new Array()
        this.s2 = new Array()
    }
    enqueue(val){
        this.s1.push(val)
    }
    dequeue(){
        if(this.s2.length !== 0){
            return this.s2.pop()
        }
        else{
            while(this.s1.length > 0){
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2.pop()
    }
    peek(){
        if(this.s2.length !== 0){
            return this.s2[this.s2.length -1]
        }
        else{
            while(this.s1.length > 0){
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2[this.s2.length -1]
    }
    isEmpty(){
        return this.s1.length === 0 && this.s2.length === 0
    }
    size(){
        return this.s1.length + this.s2.length
    }
    print(){
        let result = "Front-"
        for(let i = this.s2.length -1 ; i >= 0 ; i--){
            result += this.s2[i] + "-"
        }
        for(let i = 0 ; i < this.s1.length ; i++){
            result += this.s1[i] + "-"
        }
        return result + "Rear"
    }
}


// 7 ->  Implement QUEUE using Singly LinkedList.
class Queue4{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    push(val){
        // append
        let node = new Node(val)
        if(!this.tail){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node2
        }
        this.size++
    }
    pop(){
        if(!head) return null
        let removedVal = this.head.value
        this.head = this.head.next
        if(!this.head) this.tail = null
        this.size--
        return removedVal
    }
    peek(){
        if(!this.head) return null
        return this.head.value 
    }
}

// 8 ->  Implement CIRCULAR QUEUE.
class CircularQueue{
    constructor(capacity){
        this.queue = new Array(capacity)
        this.capacity = capacity
        this.front = -1
        this.rear = -1
    }
    currentSize(){
        if(this.isEmpty()) return 0
        return ( this.rear - this.front + this.capacity ) % this.capacity
    }
    isFull(){
        return (this.rear + 1) % this.capacity === this.front
    }
    isEmpty(){
        return this.front === -1
    }
    enqueue(val){
        if(this.isFull()){
            console.log("Queue is Full")
            return;
        }
        if(this.isEmpty()){
            this.front = 0
            this.rear = 0
        }
        else this.rear = (this.rear + 1) % this.capacity
        this.queue[this.rear] = val
    }
    dequeue(){
        if(this.isEmpty()) return null
        let removedVal = this.queue[this.front]
        this.queue[this.front] = null
        if(this.front === this.rear){
            this.front = -1
            this.rear = -1
        }
        else this.front = (this.front + 1) % this.capacity
        return removedVal
    }
    peek(){
        if(this.isEmpty()) return null
        return this.queue[this.front]
    }
    display(){
        if(this.isEmpty()){
            console.log("Queue is Empty")
            return;
        }
        let result = "Front-"
        for(let i = this.front ; i != this.rear ; i = (i+1) % this.capacity){
            result += this.queue[i] + "-"
        }
        return result + this.queue[this.rear] + "-Rear"
    }
}

// 9 -> Implement Singly LINKEDLIST.
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()) this.head = node
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(val){
        const node = new Node(val)
        if(this.isEmpty()) this.head = node
        else{
            let curr = this.head
            while(curr.next) curr = curr.next
            curr.next = node
        }
        this.size++
    }
    removeFirst(){
        if(this.isEmpty()){
            console.log("List is Empty")
            return
        }
        let removedVal = this.head.value
        this.head = this.head.next
        this.size--
        return removedVal
    }
    removeLast(){
        if(this.isEmpty()){
            console.log("List is Empty")
            return
        }
        if(!this.head.next){
            let removedVal = this.head.value
            this.head = null
            this.size--
            return removedVal
        }
        else{
            let prev = this.head
            while(prev.next && prev.next.next) prev = prev.next
            let removedVal = prev.next.value
            prev.next = null
            this.size--
            return removedVal
        }
    }
    print(){
        let result = "Head->"
        let curr = this.head
        while(curr){
            result += curr.value + "->"
            curr = curr.next
        }
        return result + "Null"
    }
    reverse1(){
        let curr = this.head
        let prev = null
        while(curr){
            let nextNode = curr.next
            curr.next = prev
            prev = curr
            curr = nextNode
        }
        this.head = prev
    }
    reverse2(head = this.head){
        if(!head || !head.next){
            this.head = head
            return head
        }
        let newHead = this.reverse2(head.next)
        head.next.next = head
        head.next = null
        return newHead
    }
}


// 10 -> Implement Doubly LINKEDLIST
class Node2{
    constructor(val){
        this.value = val
        this.prev = null
        this.next = null
    }
}
class DLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    insertAtTail(val){
        const node = new Node2(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    insertAtHead(val){
        const node = new Node2(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    display(){
        let result = []
        let curr = this.head
        while(curr){
            result.push(curr.value)
            curr = curr.next
        }
        return result.join(" <-> ")
    }
}
