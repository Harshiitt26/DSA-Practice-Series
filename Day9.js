// BINARY TREE - EASY LEVEL
class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f


// 1 -> Preorder traversal of a binary tree using an iterative DFS.
function depthFirstValues(root){
    if(!root) return []
    let result = []
    let stack = [ root ]
    while(stack.length > 0){
        let curr = stack.pop()
        result.push(curr.value)
        
        if(curr.right) stack.push(curr.right)
        if(curr.left) stack.push(curr.left)
    }
    return result
}
console.log(depthFirstValues(a))


// 2 -> Preorder traversal of a binary tree using recursive DFS.
function depthFirstValues2(root){
    if(!root) return []
    let leftValues = depthFirstValues2(root.left)
    let rightValues = depthFirstValues2(root.right)
    return [root.value , ...leftValues , ...rightValues]
}
console.log(depthFirstValues2(a))


// 3 -> level-order traversal of a binary tree using BFS.
function breadthFirstSearch(root){
    if(!root) return []
    let result = []
    let queue = [ root ]
    while(queue.length > 0){
        let curr = queue.shift()
        result.push(curr.value)
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    return result
}
console.log(breadthFirstSearch(a))


// 4 -> Check if a target exists in a binary tree using BFS.
function includesViaBFS(root , target){
    if(!root) return false
    let queue = [ root ]
    while(queue.length > 0){
        let curr = queue.shift()
        if(curr.value === target) return true
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    return false
}
console.log(includesViaBFS(a , "f"))


// 5 -> Check if a target exists in a binary tree using iterative DFS.
function includesViaDFS(root , target){
    if(!root) return false
    let stack = [ root ]
    while(stack.length > 0){
        let curr = stack.pop()
        if(curr.value === target) return true
        if(curr.left) stack.push(curr.left)
        if(curr.right) stack.push(curr.right)
    }
    return false
}
console.log(includesViaDFS(a , "a"))


// 6 -> Check if a target exists in a binary tree using recrsive DFS.
function includesViaDFS2(root , target){
    if(!root) return false
    if(root.value === target) return true
    return (includesViaDFS2(root.left , target) ||includesViaDFS2(root.right , target))
}
console.log(includesViaDFS2(a , "f"))

// **************************
const A = new Node(2)
const B = new Node(4)
const C = new Node(6)
const D = new Node(8)
const E = new Node(10)
const F = new Node(12)

A.left = B
A.right = C
B.left = D
B.right = E
C.right = F
// ***************************


// 7 -> Find the sum of all nodes in a binary tree using BFS.
function treeSumBFS(root){
    if(!root) return 0
    let sum = 0
    let queue = [root]
    while(queue.length > 0){
        let curr = queue.shift()
        sum += curr.value
        if(curr.left) queue.push(curr.left)
        if(curr.right) queue.push(curr.right)
    }
    return sum
}
console.log(treeSumBFS(A))


// 8 -> Find the sum of all nodes in a binary tree using recursive DFS.
function treeSumBFS2(root){
    if(!root) return 0
    return root.value + treeSumBFS2(root.left) + treeSumBFS2(root.right)
} 
console.log(treeSumBFS2(A))


// 9 -> Find the minimum node value in a binary tree using iterative DFS.
function minValueDFS(root){
    if(!root) return "empty tree"
    let smallest = Infinity
    let stack = [root]
    while(stack.length > 0){
        let curr = stack.pop()
        smallest = Math.min(smallest , curr.value)
        if(curr.left) stack.push(curr.left)
        if(curr.right) stack.push(curr.right)
    }
    return smallest
}
console.log(minValueDFS(A))


// 10 -> Find the minimum node value in a binary tree using recursive DFS.
function minValueDFS2(root){
    if(!root) return Infinity
    return Math.min(root.value , minValueDFS2(root.left) , minValueDFS2(root.left))
}
console.log(minValueDFS2(A))


// 11 -> Find the max root-to-leaf path sum in a binary tree using recursion.
function maxPathSum(root){
    if(!root) return -Infinity
    if(!root.left && !root.right) return root.value
    let maxChildPathSum =  Math.max(maxPathSum(root.left) , maxPathSum(root.right))
    return root.value + maxChildPathSum
}
console.log(maxPathSum(A))

