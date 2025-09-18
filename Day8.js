// DAY - 8 - LINKED LIST -> EASY LEVEL
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
let head = new Node(5)
head.next = new Node(10)
head.next.next = new Node(15)
head.next.next.next = new Node(20)


// 1 -> Find the length of a linked list
function findLength(head){
    let curr = head
    let count = 0
    while(curr){
        count++
        curr = curr.next
    }
    return count
}
console.log(findLength(head))


// 2 -> Find the sum of all nodes
function sumOfAllNodes(head){
    let currSum = 0
    let curr = head
    while(curr){
        currSum += curr.value
        curr = curr.next
    }
    return currSum
}
console.log(sumOfAllNodes(head))


// 3 -> Search for an element in the list
function searchAnElement(head , element){
    let curr = head
    while(curr){
        if(curr.value === element) return true
        curr = curr.next
    }
    return false
}
console.log(searchAnElement(head , 20))


// 4 -> Check if the linked list is empty
function isEmpty(head){
    return head === null 
}
console.log(isEmpty(head))


// 5 -> Insert a node at the beginning
function prepend(head , element){
    let node = new Node(element)
    node.next = head
    head = node
    return head
}
head = prepend(head , 100)
console.log(print(head))


// 6 -> Insert a node at the end
function append(head , element){
    let node = new Node(element)
    let prev = head
    while(prev.next){
        prev = prev.next
    }
    prev.next = node
    return head
}
head = append(head , 99)
console.log(print(head))


// 7 -> Insert a node at a given position
function insertAt(head , value , position){
    if(position < 0) return head
    let prev = head
    let index = 0
    while(index < position-1 && prev){
        prev = prev.next
        index++
    }
    if (!prev) return head;
    let node = new Node(value)
    node.next = prev.next
    prev.next = node
    return head
}
head = insertAt(head , 88 , 6)
console.log(print(head))


// 8 -> Delete the first node
function removeAtFirst(head){
    if(!head) return null
    return head.next
}
head = removeAtFirst(head)
console.log(print(head))


// 9 -> Delete the last node
function removeAtLast(head){
    if(!head || !head.next) return null
    let prev = head
    while(prev.next.next){
        prev = prev.next
    }
    prev.next = null
    return head
}
head = removeAtLast(head)
console.log(print(head))


// 10 -> Delete a node by value
function removeByValue(head , value){
    if(!head) return null
    if(head.value === value) return head.next
    let prev = head
    while(prev.next && prev.next.value !== value){
        prev = prev.next
    }
    if(prev.next) prev.next = prev.next.next
    return head
}
head = removeByValue(head , 15)
console.log(print(head))


// 11 -> Print the linked list
function print(head){
    let result = "Head->"
    let curr = head
    while(curr){
        result += curr.value + "->"
        curr = curr.next
    }
    result += "Null"
    return result
}
console.log(print(head))


// 12 -> Count frequency of an element
function countFrequency(head , element){
    let count = 0
    let curr = head
    while(curr){
        if(curr.value === element) count++
        curr = curr.next
    }
    return count
}
console.log(countFrequency(head , 5))


// 13 -> Find the maximum and minimum node values
function MinMaxValues(head){
    let min = head.value
    let max = head.value
    let curr = head.next
    while(curr){
        min = Math.min(min , curr.value)
        max = Math.max(max , curr.value)
        curr = curr.next
    }
    return {min , max}
}
console.log(MinMaxValues(head))


// 14 -> Check if the linked list has only one node
function checkIfOnlyOneNode(head){
    return head !== null && !head.next
}
console.log(checkIfOnlyOneNode(head))
