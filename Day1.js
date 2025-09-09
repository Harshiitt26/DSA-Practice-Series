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
    let i = 0 ; j = n-1
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





