// ARRAYS -> Subarray & Sliding Window
// 1 -> Find the maximum subarray sum (Kadane’s Algorithm)
function maxSumSubarray(arr){
    let n = arr.length
    let currSum = arr[0]
    let maxSum = arr[0]
    for(let i = 1 ; i < n ; i++){
        currSum = Math.max(arr[i] , currSum + arr[i])
        maxSum = Math.max(maxSum , currSum)
    }
    return maxSum
}
console.log(maxSumSubarray([-2,1,-3,4,-1,2,1,-5,4])) // Output -> 6


// 2 -> Find the Minimum Subarray Sum
function minSumSubarray(arr){
    let n = arr.length
    let currSum = arr[0]
    let minSum = arr[0]
    for(let i = 1 ; i < n ; i++){
        currSum = Math.min(arr[i] , currSum + arr[i])
        minSum = Math.min(minSum , currSum)
    }
    return minSum
}
console.log(minSumSubarray([3,-4,2,-3,-1,7,-5])) // Output -> -6


// 3 -> Find the Longest Subarray with Sum = K
// if all elements are Positive
function longSubarraySumK(arr , k){
    let n = arr.length
    let currSum = arr[0]
    let maxLen = 0
    let start = 0 , end = 0
    while(end < n){
        while(start <= end && currSum > k){
            currSum -= arr[start]
            start++
        }
        if(currSum === k) maxLen = Math.max(maxLen , end - start +1)
        end++
        if(end < n) currSum += arr[end]
    }
    return maxLen
}
console.log(longSubarraySumK([10,5,2,7,1,9] , 15)) // Output -> 4

// 4 -> Find the Longest Subarray with All Unique Elements
function longSubarrayUniqueVals(arr){
    let n = arr.length
    let set = new Set()
    let start = 0 , end = 0
    let maxLen = 0
    while(end < n){
        while(set.has(arr[end])){
            set.delete(arr[start])
            start++
        }
        set.add(arr[end])
        maxLen = Math.max(maxLen , end - start + 1)
        end++
    }
    return maxLen
}
console.log(longSubarrayUniqueVals([1,2,3,1,2,3,4])) // Output -> 4


// 5 -> Count subarrays with sum = K
// better brute force
function countSubarraySum(arr , k){
    let n = arr.length
    let count = 0 
    for(let i = 0 ; i < n ; i++){
        let sum = 0
        for(let j = i ; j < n ; j++){
            sum += arr[j]
            if(sum === k) count++
        }
    }
    return count
}
console.log(countSubarraySum([1,2,3] , 3))

// optimized
function countSubarraySum2(arr , k){
    let count = 0
    let prefixSum = 0
    let map = new Map()
    map.set(0 , 1)
    for(let value of arr){
        prefixSum += value
        if(map.has(prefixSum - k)){
            count += map.get(prefixSum - k);
        }
        map.set(prefixSum , (map.get(prefixSum) || 0) + 1)
    }
    return count
}
console.log(countSubarraySum2([1,2,3] , 3))


// 6 -> Find the Maximum Product Subarray
// Observation based approach
function maxProdSubarray(arr){
    let n = arr.length
    let prefix = 1 , suffix = 1
    let maxProd = arr[0]
    for(let i = 0 ; i < n ; i++){
        prefix = (prefix === 0 ? 1 : prefix) * arr[i]
        suffix = (suffix === 0 ? 1 : suffix) * arr[n-1-i]

        maxProd = Math.max(maxProd , prefix , suffix)
    }
    return maxProd
}
console.log(maxProdSubarray([2,3,-2,4])) // Output -> 6

// Kadane's approach
function maxProdSubarray2(arr){
    let n = arr.length
    let minProd = arr[0]
    let maxProd = arr[0]
    let result = arr[0]
    for(let i = 1 ; i < n ; i++){
        let value = arr[i]
        if(value < 0) [maxProd , minProd] = [minProd , maxProd]
        maxProd = Math.max(value , maxProd * value)
        minProd = Math.min(value , minProd * value)
        result = Math.max(result , maxProd)
    }
    return result
}
console.log(maxProdSubarray2([2,3,-2,4])) // Output -> 6


// 7 -> Count the Number of Subarrays with Even Sum
// better brute force
function countEvenSumSubarrays(arr){
    let n = arr.length
    let count = 0
    for(let i = 0 ; i < n ; i++){
        let sum = 0
        for(let j = i ; j < n ; j++){
            sum += arr[j]
            if(sum % 2 === 0) count++
        }
    }
    return count
}
// console.log(countEvenSumSubarrays([1,2,2,3]))
// optimal approach
function countEvenSumSubarrays2(arr){
    let prefixSum = 0
    let evenCount = 1 , oddCount = 0
    let result = 0
    for(let value of arr){
        prefixSum += value
        if(prefixSum % 2 === 0){
            result += evenCount
            evenCount++
        }
        else{
            result += oddCount
            oddCount++
        }
    }
    return result
}
// console.log(countEvenSumSubarrays2([1, 2, 2, 3]))


// 8 -> Find the Largest Sum of K Consecutive Elements
function maxSumOfKConsecutive(arr , k){
    let n = arr.length 
    let windowSum = 0
    let start = 0 , end = 0
    while(end < k){
        windowSum += arr[end]
        end++
    }
    let maxSum = windowSum
    while(end < n){
        windowSum += arr[end] - arr[start]
        start++
        end++
        maxSum = Math.max(maxSum , windowSum) 
    }
    return maxSum
}
console.log(maxSumOfKConsecutive([2,1,5,1,3,2] , 3)) // Output -> 9


