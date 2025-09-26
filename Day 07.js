// STRINGS -> STRING MATCHING AND SEARCHING
// 1 -> Implement Naive Pattern Matching
function naivePatternSearch(s1 ,s2){
    let n = s1.length , m = s2.length
    let result = []
    for(let i = 0 ; i <= n-m ; i++){
        let j
        for(j = 0 ; j < m ; j++){
            if(s1[i+j] !== s2[j]) break
        }
        if(j === m) result.push(i)
    }
    return result
}
console.log(naivePatternSearch("ABABAC" , "ABA"))


// 2 -> Implement KMP Algorithm (Knuth-Morris-Pratt)
function computeLps(s){
    let n = s.length
    let lps = new Array(n).fill(0)
    let j = 0 , i = 1
    while(i < n){
        if(s[i] === s[j]){
            lps[i] = j + 1
            i++
            j++
        }
        else{
            if(j === 0) i++ 
            else j = lps[j -1]
        }
    }
    return lps
}
function KMPSearch(s1,s2){
    let n = s1.length , m = s2.length
    let lps = computeLps(s2)
    let i = 0 , j = 0
    let result = []
    while(i < n){
        if(s1[i] === s2[j]){
            i++ 
            j++
        }
        else{
            if(j === 0) i++
            else j = lps[j-1]
        }
        if(j === m){
            result.push(i-j)
            j = lps[j-1]
        }
    }
    return result
}
console.log(KMPSearch("ABABACABA" , "ABA"))


// 3 -> Implement Rabin-Karp Algorithm
function rabinKarp(s1 , s2 , prime = 101){
    let n = s1.length , m = s2.length
    let base = 256
    let h = 1
    for(let i = 0 ; i < m-1 ; i++) h = (h * base) % prime
    let p = 0 , t = 0
    for(let i = 0 ; i < m ; i++){
        p = (base * p + s2.charCodeAt(i)) % prime
        t = (base * t + s1.charCodeAt(i)) % prime
    }
    let result = []
    for(let i = 0 ; i <= n-m ; i++){
        if(p === t){
            if(s1.substring(i , i+m) === s2){
                result.push(i)
            }
        }
        if(i < n-m){
            t = (base * (t - s1.charCodeAt(i) * h) + s1.charCodeAt(i+m)) % prime
            if (t < 0) t += prime;
        }
    }
    return result
}
console.log(rabinKarp("ABCABCDABC" , "ABC"))


// 4 -> Implement Z Algorithm for pattern matching
function computeZArray(s){
    n = s.length
    let Z = new Array(n).fill(0)
    let l = 0 , r = 0
    for(let i = 1 ; i < n ; i++){
        if(i <= r) Z[i] = Math.min(r-i+1 , Z[i-l])
        while(i + Z[i] < n && s[Z[i]] === s[i+Z[i]]){
            Z[i]++
        }
        if(i + Z[i] - 1 > r){
            l = i 
            r = i + Z[i] - 1
        }
    }
    return Z
}
function ZSearch(s1 , s2){
    let concat = s2 + "$" +s1
    let Z = computeZArray(concat)
    let result = []
    for(let i = 0 ; i < Z.length ; i++){
        if(Z[i] === s2.length){
            result.push(i - s2.length - 1)
        }
    }
    return result
}
console.log(ZSearch("ABAACABA" , "ABA"))


// 5 -> Wildcard Pattern Matching (? and *)
// uses Dynamic Programming
