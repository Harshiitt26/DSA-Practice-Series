// STRINGS -> SLIDING WINDOW & HASHING
// 29 -> Find the smallest window substring containing all characters of another string
// O(Tc) = O(n^2)
function smallestWindowSubstring(s1 , s2){
    let n = s1.length , m = s2.length
    let startIndex = -1
    let minLen = Infinity
    for(let i = 0 ; i < n ; i++){
        let map = new Map()
        for(let ch of s2){
            map.set(ch , (map.get(ch) || 0 ) + 1)
        }
        let count = 0
        for(let j = i ; j < n ; j++){
            if(map.has(s1[j])){
                map.set(s1[j] , (map.get(s1[j]) || 0) - 1)
                if (map.get(s1[j]) >= 0) count++;
            }
            if(count === m){
                if(minLen > (j-i+1)){
                    minLen = j-i+1
                    startIndex = i
                }
                break
            }
        }
    }
    return startIndex === -1 ? "" : s1.substring(startIndex , startIndex + minLen )
}
console.log(smallestWindowSubstring("ADOBECODEBANC" , "ABC"))

// O(Tc) = O(n) 
function smallestWindowSubstring2(s1 , s2){
    let map = new Map()
    for(let ch of s2){
        map.set(ch , (map.get(ch) || 0) + 1)
    }
    let left = 0 , right = 0
    let count = 0 , minLen = Infinity
    let startIndex = -1
    while(right < s1.length){
        let ch = s1[right]
        if (map.has(ch)) {
            map.set(ch, map.get(ch) - 1);
            if (map.get(ch) >= 0) count++;
        }
        while(count === s2.length){
            if(minLen > right-left+1){
                minLen = right-left+1
                startIndex = left
            }
            let leftChar = s1[left]
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) count--;
            }
            left++;
        }
        right++
    }
    return startIndex === -1 ? "" : s1.substring(startIndex , startIndex + minLen)
}
console.log(smallestWindowSubstring2("ADOBECODEBANC" , "ABC"))


// 30 -> Minimum Window Substring with Distinct Characters
function minWindowWithAllDistinctChars(s){
    let set = new Set(s)
    let left = 0 , right = 0
    let map = new Map()
    let minLen = s.length , startIndex = 0
    while(right < s.length){
        let ch = s[right]
        map.set(ch , (map.get(ch) || 0 ) + 1)
        if(map.size === set.size){
            while( map.get(s[left]) > 1){
                map.set(s[left] , map.get(s[left]) - 1)
                left++
            }
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                startIndex = left;
            }
        }
        right++
    }
    return minLen === s.length ? "" : s.substring(startIndex , startIndex + minLen)
}
console.log(minWindowWithAllDistinctChars("aabcbcdbca"))// dbca


// 31 -> Longest Substring with K Distinct Characters
// O(Tc) = O(n^2)
function longestSubstringKDistinct(str , k){
    let maxLen = 0
    for(let i = 0 ; i < str.length ; i++){
        let map = new Map()
        for(let j = i ; j < str.length ; j++){
            map.set(str[j] , (map.get(str[j]) || 0) + 1)
            if(map.size <= k){
                maxLen = Math.max(maxLen , j-i+1)
            }
            else break
        }
    }
    return maxLen
}
console.log(longestSubstringKDistinct("aabbcc" , 2))

// O(Tc) = O(n)
function longestSubstringKDistinct2(str , k){
    let left = 0 , right = 0
    let map = new Map()
    let maxLen = 0
    while(right < str.length){
        let ch = str[right]
        map.set(ch , (map.get(ch) || 0) + 1)
        while(map.size > k){
            let leftChar = str[left]
            map.set(leftChar , (map.get(leftChar) - 1))
            if(map.get(leftChar) === 0) map.delete(leftChar)
            left++
        }
        maxLen = Math.max(maxLen , right-left+1)
        right++
    }
    return maxLen
}
console.log(longestSubstringKDistinct2("aabbcc" , 2))


// 32 -> Count Occurrences of a Pattern in a String
function countPatternOccurrences(str1 , str2){
    let m = str1.length , n = str2.length
    let count = 0
    for(let i = 0 ; i <= m-n ; i++){
        let j = 0 
        while(j < n && str1[i+j] === str2[j]) j++
        if(j === n) count++
    }
    return count
}
console.log(countPatternOccurrences("aaaa" , "aa"))
// use KMP Algorithm


// 33 -> Count Distinct Substrings using Hashing + Set
function countDistinctSubstrings(str){
    let n = str.length
    let count = 0
    let set = new Set()
    for(let i = 0 ; i < n ; i++){
        let sub = ""
        for(let j = i ; j < n ; j++){
            sub += str[j]
            set.add(sub)
        }
    }
    return set.size
}
console.log(countDistinctSubstrings("ababa"))

