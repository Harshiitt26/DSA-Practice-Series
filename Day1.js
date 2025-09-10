// ARRAYS -> TWO POINTER PROBLEM
// 1 -> Find pairs with a given sum in a sorted array
function findPairs(arr ,k){
    let n = arr.length
    let i = 0 , j = n-1
    let result = []
    while(i < j ){
        if(arr[i] + arr[j] > k) j--
        else if(arr[i] + arr[j] < k) i++
        else{
            result.push([arr[i] , arr[j]])
            i++
            j--
        }
    }
    return result
}
// console.log(findPairs([ -5, 0 ,1,2,3,3,4,5, 7] , 6))


// 2 -> Find triplets with a given sum
function findTriplets(arr , k){
    arr.sort((a,z)=> a-z)
    let result = []
    let n = arr.length
    for(let i = 0 ; i < n-2 ; i++){
        // to remove duplicates
        if(i > 0 && arr[i] === arr[i-1]) continue
        let first = arr[i]
        let diff = k - first
        let front = i+1 , end = n-1
        while(front < end){
            let sum = arr[front] + arr[end]
            if( sum > diff) end--
            else if(sum < diff) front++
            else {
                result.push([first , arr[front] , arr[end]])
                front++
                end--
                // to remove duplicates
                while(front<end && arr[front] === arr[front-1]) front++;
                while(front<end && arr[end] === arr[end + 1]) end--;
            }
        }
    }
    return result
}
// console.log(findTriplets([1,2,-1,0,3,-2] , 2))


// 3 -> Find the Closest Pair to a Target Sum
function closestPair(arr , k){
    let n = arr.length 
    let i = 0 , j = n-1
    let closestSum = Infinity
    let resultPair = []
    while(i < j){
        let currSum = arr[i] + arr[j]
        if(Math.abs(k - currSum) < Math.abs(k - closestSum)){
            closestSum = currSum
            resultPair = [arr[i] , arr[j]]
        }
        if(currSum < k) i++
        else j--
    }
    return resultPair
}
// console.log(closestPair([1,3,4,7,10] , 15))


// 4 -> Move all zeros to the end of the array
function move0sToEnd(arr){
    let i = 0 , j = 0
    while(j < arr.length){
        if(arr[j] !== 0){
            [arr[i] , arr[j]] = [arr[j] , arr[i]]
            i++
        }
        j++
    }
    return arr
}
// console.log(move0sToEnd([0,1,0,3,12]))


// 5 -> Separate Positive and Negative Numbers
// a -> Order does not matters
function separate1(arr){
    let i = 0 , j = 0
    while(j < arr.length){
        if(arr[j] < 0){
            [arr[i] , arr[j]] = [arr[j] , arr[i]]
            i++
        }
        j++
    }
    return arr
}
// console.log(separate1([-1 , 2 , -3 , 4 , 5 , -6]))
// b -> Order matters
function separate2(arr){
    let temp = []
    for(let value of arr){
        if(value < 0) temp.push(value)
    }
    for(let value of arr){
        if(value > 0) temp.push(value)
    }
    for(let i = 0 ; i < arr.length ; i++){
        arr[i] = temp[i]
    }
    return arr
}
// console.log(separate2([-1 , 2 , -3 , 4 , 5 , -6]))


// 6 -> Merge Two Sorted Arrays in O(1) Extra Space
function merge1(arr1 , arr2){
    let n = arr1.length , m = arr2.length
    let i = 0 , j = 0
    let newArr = []
    while(i < n && j < m){
        if(arr1[i] <= arr2[j]){
            newArr.push(arr1[i])
            i++
        }else {
            newArr.push(arr2[j])
            j++
        }
    }
    while(i < n){
        newArr.push(arr1[i])
        i++
    }
    while(j < m){
        newArr.push(arr2[j])
        j++
    }
    for(let k = 0 ; k < n ; k++){
        arr1[k] = newArr[k]
    }
    for(let k = 0 ; k < m ; k++){
        arr2[k] = newArr[n + k]
    }
    return [arr1 , arr2]
}
// console.log(merge1([1,4,7,8,10] , [2,3,9]))


// If arrays are sorted
function merge2(arr1 , arr2){
    let n = arr1.length , m = arr2.length
    let left = n-1 , right = 0
    while(arr1[left] > arr2[right]){
        [arr1[left] , arr2[right]] = [arr2[right] , arr1[left]]
        left--
        right++
    }
    arr1.sort((a,z)=> a-z)
    arr2.sort((a,z)=> a-z)
    return [arr1 , arr2]
}
// console.log(merge2([1,4,7,8,10] , [2,3,9]))


function merge3(arr1 , arr2){
    let n = arr1.length , m = arr2.length
    let len = (n + m)
    let gap = Math.ceil(len / 2)
    // OR let gap = (len / 2) + (len % 2)
    while(gap > 0){
        let left = 0 , right = left + gap
        while(right < len){
            if(left < n && right >= n){
                swapIfGreater(arr1 , arr2 , left , right - n)
            }
            else if(left >= n){
                swapIfGreater(arr2 , arr2 , left - n , right - n)
            }
            else swapIfGreater(arr1 , arr1 , left , right)
            left++
            right++
        }
        gap = gap === 1 ? 0 : Math.ceil(gap / 2)
    }
    return [arr1 , arr2]
}
function swapIfGreater(arr1 , arr2 , indx1 , indx2){
    if(arr1[indx1] > arr2[indx2]){
        [arr1[indx1] , arr2[indx2]] = [arr2[indx2] , arr1[indx1]]
    }
}
// console.log(merge3([1,4,7,8,10] , [2,3,9]))


// 7 -> Find the Intersection of Two Arrays
// If arrays are sorted
function intersectionSorted(arr1 , arr2){
    let n = arr1.length , m = arr2.length
    let i = 0 ; j = 0
    let result = []
    while( i < n && j < m){
        if(arr1[i] < arr2[j]) i++
        else if(arr1[i] > arr2[j]) j++
        else {
            result.push(arr1[i])
            i++
            j++
        }
    }
    return result
}
console.log(intersectionSorted([1,2,2,3], [2,2,4]))


// If arrays are sorted or not
function intersection(arr1 , arr2){
    let freq = new Map()
    let result = []
    for(let value of arr1){
        freq.set(value , (freq.get(value) || 0) + 1)
    }
    for(let value of arr2){
        if(freq.has(value) && freq.get(value) > 0){
            result.push(value)
            freq.set(value , freq.get(value) - 1)
        }
    }
    return result

}
// console.log(intersection([1,2,2,3], [2,2,4]))


// 8 -> Find the Union of Two Arrays
function union(arr1 , arr2){
    let set = new Set([...arr1 , ...arr2])
    return [...set]
}
// console.log(union([1,2,2,3] , [2,3,4]))

