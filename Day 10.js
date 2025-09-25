// 1 -> IMPLEMENT A STACK 
class Stack{
    constructor(){
        this.stack = []
    }
    size(){
        return this.stack.length
    }
    isEmpty(){
        return this.size() === 0
    }
    clear(){
        this.stack = []
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
        let topValue = this.stack[this.size()-1]
        return topValue
    }
    search(value){
        for(let n of this.stack){
            if(n === value) return true
        }
        return false
    }
    print(){
        let result = ""
        this.stack.forEach((n)=>{
            result += n + " "
        })
        result += "Top"
        console.log(result)
    }
}
const myStack = new Stack()


// 2 -> Check if the string is Palindrome using stack
function isPalindrome(s){
    let stack = []
    for(let ch of s){
        stack.push(ch)
    }
    let reverseS = ""
    while(stack.length){
        reverseS += stack.pop()
    }
    return s === reverseS ? true : false
}
// console.log(isPalindrome("naman"))


// 3 -> All Methods of SET(Built-in)
let set1 = new Set([10 , 20 , 30 , 40])
let set2 = new Set([20 , 30 , 50 , 60])
// console.log(set1.size)
set1.add(50)
set1.delete(50)
// console.log(set1.has(15))
set1.forEach((v)=>{})
// console.log([...set1.keys()] , [...set1.values()])
// console.log([...set1.entries()])
let union = new Set([...set1 , ...set2])
let intersection = new Set([...set1].filter(x => set2.has(x)))
let difference = new Set([...set1].filter(x => !set2.has(x)))
// console.log(union , intersection , difference)
set1.clear()


// 4 -> IMPLEMENT QUEUE using Object
class Queue{
    constructor(){
        this.queue = {}
        this.front = 0
        this.rear = 0
    }
    size(){
        return this.rear - this.front
    }
    isEmpty(){
        return this.size() === 0
    }
    clear(){
        this.queue = {}
        this.front = 0
        this.rear = 0
    }
    enqueue(value){
        this.queue[this.rear] = value
        this.rear++
    }
    dequeue(){
        if(this.isEmpty()) return null
        let removedValue = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return removedValue
    }
    peek(){
        if(this.isEmpty()) return null
        return this.queue[this.front]
    }
    search(value){
        for(let v of Object.values(this.queue)){
            if(v === value) return true
        }
        return false
    }
    print(){
        let result = ""
        for(let v of Object.values(this.queue)){
            result += v + " "
        }
        result += "Rear"
        console.log(result)
    }
}
let q = new Queue();


// 5 -> IIMPLEMENT BINARY SEARCH TREE
class BSTNode{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const node = new BSTNode(value)
        if(this.isEmpty()) this.root = node
        else this.insertNode(this.root , node)
    }
    insertNode(root , node){
        if(root.value > node.value){
            if(!root.left) root.left = node
            else this.insertNode(root.left , node)
        }
        else if(root.value < node.value){
            if(!root.right) root.right = node
            else this.insertNode(root.right , node)
        }
        else console.log(node.value , "_ignored")
    }
    preorder(root = this.root){
        if(!root) return null
        console.log(root.value)
        this.preorder(root.left)
        this.preorder(root.right)
    }
    inorder(root = this.root){
        if(!root) return null
        this.inorder(root.left)
        console.log(root.value)
        this.inorder(root.right)
    }
    postorder(root = this.root){
        if(!root) return null
        this.postorder(root.left)
        this.postorder(root.right)
        console.log(root.value)
    }
    levelOrder(root = this.root){
        let queue = []
        queue.push(root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)
        }
    }
    findMin(root = this.root){
        if(!root) return null
        while(root.left) root = root.left
        return root.value
    }
    findMax(root = this.root){
        if(!root) return null
        while(root.right) root = root.right
        return root.value
    }
    // search using recursion
    search(root = this.root , value){
        if(!root) return false
        if(root.value === value) return true
        if(root.value > value) {
            return this.search(root.left , value)
        }
        else return this.search(root.right , value)
    }
    // search using iteration
    search2(root = this.root , value){
        if(!root) return false
        while(root){
            if(root.value === value) return true
            if(root.value > value) root = root.left
            else root = root.right
        }
        return false
    }
    delete(value){
        this.root = this.deleteNode(this.root , value)
    }
    deleteNode(root , value){
        if(!root) return null
        if(root.value > value){
            root.left = this.deleteNode(root.left , value)
        }
        if(root.value < value){
            root.right = this.deleteNode(root.right , value)
        }
        else{
            if(!root.left && !root.right) return null
            if(!root.left) return root.right
            if(!root.right) return root.left
            root.value = this.findMin(root.right)
            root.right = this.deleteNode(root.right , root.value)
        }
        return root
    }
}
const bst = new BST()


// 6 -> IMPLEMENT HASH TABLE
// add some code to prevent collision
class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    _hash(key){
        let total = 0
        for(let ch of key){
            total += ch.charCodeAt(0)
        }
        return total % this.size
    }
    set(key , value){
        let index = this._hash(key)
        this.table[index] = value
    }
    get(key){
        let index = this._hash(key)
        return this.table[index]
    }
    remove(key){
        let index = this._hash(key)
        this.table[index] = undefined
    }
    display(){
        this.table.forEach((bucket , index) => {
            if(bucket) console.log(bucket , index)
        })
    }
}
const hashtable = new HashTable()


// 7 -> IMPLEMENT LINKED LIST
class LLNode {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LL{
    constructor(){
        this.head = null
        this.count = 0
    }
    isEmpty(){
        return this.count === 0
    }
    getSize(){
        return this.count 
    }
    prepend(value){
        let node = new LLNode(value)
        if(this.isEmpty()) this.head = node
        else{
            node.next = this.head
            this.head = node
        }
        this.count++
    }
    append(value){
        let node = new LLNode(value)
        if(this.isEmpty()) this.head = node
        else{
            let curr = this.head
            while(curr && curr.next){
                curr = curr.next
            }
            curr.next = node
        }
        this.count++
    }
    insertAt(index , value){
        if(index < 0 || index > this.getSize()) return null
        let node = new LLNode(value)
        if(index === 0){
            node.next = this.head
            this.head = node
        }
        else{
            let prev = this.head
            let countIndex =  0
            while(countIndex < index -1){
                prev = prev.next
                countIndex++
            }
            node.next = prev.next
            prev.next = node
        }
        this.count++
    }
    removeFirst(){
        if (this.isEmpty()) return null;
        let removed = this.head;
        this.head = this.head.next;
        this.count--;
        return removed.value;
    }
    removeLast(){
        if(this.isEmpty()) return null
        if (!this.head.next) {
            let removed = this.head;
            this.head = null;
            this.count = 0;
            return removed.value;
        }
        let prev = this.head;
        while (prev.next.next) { 
            prev = prev.next;
        }
        let removed = prev.next;
        prev.next = null;
        this.count--;
        return removed.value;
    }
    indexOf(value){
        let curr = this.head
        let index = 0
        while(curr){
            if(curr.value === value) return index
            index++
            curr = curr.next
        }
        return -1
    }
    elementAt(index){
        let curr = this.head
        let countIndex = 0 
        while(countIndex < index){
            curr = curr.next
            countIndex++
        }
        return curr.value
    }
    print(){
        let result = "Head->"
        let curr = this.head
        while(curr){
            result += curr.value + "->"
            curr = curr.next
        }
        result += "Null"
        return result
    }
}
const ll = new LL()


// 8 -> IMPLEMENT GRAPH
// add BSD DFS
class Graph{
    constructor(){
        this.list = {}
    }
    addVertex(vertex){
        if(!this.list[vertex]){
            this.list[vertex] = new Set()
        }
    }
    addEdge(vertex1 , vertex2){
        if(!this.list[vertex1]) this.addVertex(vertex1)
        if(!this.list[vertex2]) this.addVertex(vertex2)
        this.list[vertex1].add(vertex2)
        this.list[vertex2].add(vertex1)
    }
    hasEdge(v1 , v2){
        if(!this.list[v1] || !this.list[v2]) return false
        return this.list[v1].has[v2] && this.list[v2].has[v1]
    }
    removeEdge(v1 , v2){
        if(!this.list[v1] || !this.list[v2]) return false
        this.list[v1].delete(v2)
        this.list[v2].delete(v1)
    }
    removeVertex(vertex){
        if(!this.list[vertex]) return null
        for(let v of this.list[vertex]){
            this.removeEdge(vertex , v)
        }
    }
    display(){
        for(let vertex of this.list){
            console.log(vertex + "->" + [...this.list[vertex]])
        }
    }
}
const graph = new Graph()


