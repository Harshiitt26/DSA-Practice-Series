// STRINGS -> SUBSTRING & SUBSEQUENCE
// 1 -> Find the longest palindrome substring
function isPalindrome(str){
    let left = 0 , right = str.length-1
    while(left < right){
        if(str[left] !== str[right]) return false
        left++
        right--
    }
    return true
}
function longestPalindromeSubstring(str){
    let maxSub = null , maxSubLen = 0
    for(let i = 0 ; i < str.length ; i++){
        let currSub = ""
        for(let j = i ; j < str.length ; j++){
            currSub += str[j]
            if(isPalindrome(currSub) && maxSubLen < currSub.length){
                maxSub = currSub
                maxSubLen = currSub.length
            }
        }
    }
    return maxSub
}
console.log(longestPalindromeSubstring("babad"))


// 2 Longest Substring Without Repeating Characters
// SlidingWindow + Map
function longestSubstringNonRepeatingCh(str){
    let left = 0 , right = 0 
    let map = new Map()
    let maxLen = 0 
    while(right < str.length){
        if(map.has(str[right]) ){
            left = Math.max(left , map.get(str[right]) + 1)
        }
        map.set(str[right] , right)
        maxLen = Math.max(maxLen , right-left+1)
        right++
    }
    return maxLen
}
console.log(longestSubstringNonRepeatingCh("abcabcbb"))

// SlidingWindow + Set
function longestSubstringNonRepeatingCh2(str){
    let left = 0 , right = 0 
    let set = new Set()
    let maxLen = 0 
    while(right < str.length){
        while(set.has(str[right]) ){
            set.delete(str[left])
            left++
        }
        set.add(str[right])
        maxLen = Math.max(maxLen , right-left+1)
        right++
    }
    return maxLen
}
console.log(longestSubstringNonRepeatingCh2("abcabcbb"))


// 3 -> Count Palindromic Substrings
function countPalindromicSubstrings(str){
    let count = 0
    for(let i = 0 ; i < str.length ; i++){
        let currSub = ""
        for(let j = i ; j < str.length ; j++){
            currSub += str[j]
            if(isPalindrome(currSub)) count++
        }
    }
    return count
}
console.log(countPalindromicSubstrings("aaa"))


// 4 Longest Common Prefix
// sorting and checking 1st and last , O(Tc,Sc) = O((nlogn)*m,1)
function longestCommonPrefix1(arr){
    arr.sort((a,z) => a-z)
    let i = 0 
    while(i < arr[0].length){
        if(arr[0][i] === arr[arr.length -1][i]) i++
        else return i === 0 ? "" : arr[0].substring(0, i)
    }
    return arr[0]
}
console.log(longestCommonPrefix1(["flower","flow","flight"]))

// vertical Scanning O(Tc,Sc) = O(n*m,1)
function longestCommonPrefix(arr){
    for(let i = 0 ; i < arr[0].length ; i++){
        let s1 = arr[0][i]
        for(let j = 1 ; j < arr.length ; j++){
            let s2 = arr[j][i]
            if( s1 !== s2 || s1 === undefined || s2 === undefined){
                return i === 0 ? "" : arr[0].substring(0,i)
            }
        }
    }
    return arr[0]
}
console.log(longestCommonPrefix(["flower","flow","flight"]))


// 5 Longest Common Substring
// O(Tc,Sc) = O((n^2)*m,1)
function longestCommonSubstring(s1 ,s2){
    let maxLen = 0 
    for(let i = 0 ; i < s1.length ; i++){
        for(let j = i+1 ; j < s1.length ; j++){
            let sub = s1.substring(i , j)
            if(s2.includes(sub)){
                maxLen = Math.max(maxLen , sub.length)
            }
        }
    }
    return maxLen
}
// O(Tc,Sc) = O((n^2)*m,1)
function longestCommonSubstring2(s1 , s2){
    let maxLen = 0 
    for(let i = 0 ; i < s1.length ; i++){
        for(let j = 0 ; j < s2.length ; j++){
            let len = 0
            let x = i , y = j
            while( x<s1.length && y<s2.length && st1[x] === st2[y]){
                len++
                x++
                y++
            }
            maxLen = Math.max(maxLen , len)
        }
    }
}
// requires DP for optimization


// 6 Longest Common Subsequence
// requires DP


// 7 Print All Subsequences of a String
// requires Recursion and Backtracking


// 8 -> Find All Anagram Substrings
function allAnagramsSubstring(s1 , s2){
    let n1 = s1.length , n2 = s2.length
    let map1 = {}
    let map2 = {}
    for(let ch of s2){
        map2[ch ] = (map2[ch] || 0) + 1
    }
    let left = 0 , right = 0
    let result = []
    while(right < n1){
        let ch = s1[right]
        map1[ch] = (map1[ch] || 0) + 1

        if(right-left+1 > n2){
            map1[s1[left]]--
            if(map1[s1[left]] === 0) delete map1[s1[left]]
            left++
        }
        if(right-left+1 === n2 && checkMapsEqual(map1 , map2)){
            result.push(left)
        }
        right++
    }
    return result
}

function checkMapsEqual(map1 , map2){
    let keys1 = Object.keys(map1)
    let keys2 = Object.keys(map2)
    if(keys1.length !== keys2.length) return false
    for(let key of keys1){
        if(map1[key] !== map2[key]) return false
    }
    return true
}
console.log(allAnagramsSubstring("abab" , "ab"))