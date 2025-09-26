// ARRAYS -> FREQURNCY & HASHING
// 1 -> Find the first repeating element 
function firstRepeatingElement(arr){
    let n = arr.length
    let map = {}
    for(let value of arr){
        map[value] = (map[value] || 0) + 1
    }
    for(let i = 0 ; i < n ; i++){
        let value = arr[i]
        if(map[value] > 1) return i+1
    }
}
console.log(firstRepeatingElement([1,5,3,4,3,5,6])) // Output -> 2


// 2 -> Find the first non-repeating element
function firstNonRepeatingElemenet(arr){
    let map = new Map()
    for(let value of arr){
        map.set(value , (map.get(value) || 0) + 1)
    }
    for(let value of arr){
        if(map.get(value) === 1) return value
    }
}
console.log(firstNonRepeatingElemenet([9,4,9,6,7,4])) // Output -> 6


// 3 -> Majority Element (> n/2 times)
// O(TC,SC) = O(n,n)
function majorityElementNBy2(arr){
    let n = arr.length
    let map = {}
    for(let value of arr){
        map[value] = (map[value] || 0) + 1
        if(map[value] > n/2) return value
    }
    return -1
}
console.log(majorityElementNBy2([3,3,4,2,3,3,3])) // Output -> 3

// O(TC,Sc) = O(n,1) - Boyer Moore Algo
function majorityElementNBy2a(arr){
    let n = arr.length
    let candidate = null , count = 0
    for(let value of arr){
        if(count === 0){
            candidate = value
            count++
        }
        if(value === candidate) count++
        else count--
    }
    count = 0
    for(let value of arr){
        if(candidate === value) count++
    }
    return count > n/2 ? candidate : -1
}

console.log(majorityElementNBy2a([3,3,4,2,3,3,3])) // Output -> 3


// 4 -> Count distinct elements in an array
// O(Tc,Sc) = O(n,n)
function countDistinctElements(arr){
    let set = new Set(arr)
    return set.size
}
console.log(countDistinctElements([1,2,2,3,4,4,5])) // Output -> 5


// 5 -> Find the element that appears more than n/3 times
// O(Tc,Sc) = O(n,1)
function majorityElementNBy3(arr){
    let n = arr.length
    let candidate1 = null , candidate2 = null
    let count1 = 0 , count2 = 0
    for(let value of arr){
        if(value === candidate1) count1++
        else if(value === candidate2) count2++
        else if(count1 === 0){
            candidate1 = value
            count1++
        }
        else if(count2 === 0){
            candidate2 = value
            count2++
        }
        else {
            count1--
            count2--
        }
    }
    count1 = 0 , count2 = 0
    for(let value of arr){
        if(value === candidate1) count1++
        else if(value === candidate2) count2++
    }
    let result = []
    if(count1 > n/3 ) result.push(candidate1)
    if(count2 > n/3 ) result.push(candidate2) 
    return result
}
console.log(majorityElementNBy3([1,1,1,3,3,2,2,2])) // Output -> [1,2]














