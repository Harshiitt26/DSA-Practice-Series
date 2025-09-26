// Day4 - STRING - BASIC LEVEL
// 1 -> Find the length of a string (without using .length)
function getLength(str){
    let count = 0 , i = 0
    while(str[i] !== undefined){
        count++
        i++
    }
    return count
}
console.log(getLength("Harshit"))


// 2 -> Reverse a string 
// Iterative
function reverse1(str){
    let n = str.length
    let newStr = ""
    for(let i = n-1 ; i >= 0 ; i--){
        newStr += str[i]
    }
    return newStr
}
console.log(reverse1("Harshit"))

// Recursive
function reverse2(str){
    if(str.length < 2) return str
    return reverse2(str.slice(1)) + str[0]
}
console.log(reverse2("Harshit"))

// 3 -> Check if a string is a palindrome
function isPalindrome(str){
    let n = str.length
    for(let i = 0 ; i < Math.floor(n / 2) ; i++){
        if(str[i] !== str[n-1-i]) return false
    }
    return true
}
console.log(isPalindrome("Harshit"))
console.log(isPalindrome("madam"))


// 4 -> Count vowels and consonants
function countVowelsConsonants(str){
    let vowels = "aeiouAEIOU"
    let vowelCount = 0 , consonentCount = 0
    for(let ch of str){
        if(vowels.includes(ch)) vowelCount++
        else if(/[a-zA-Z]/.test(ch)) consonentCount++
    }
    return {vowelCount , consonentCount}
}
console.log(countVowelsConsonants("Harshit"))


// 5 -> Convert a string to uppercase/lowercase
function toUppercaseLowercase(str){
    let upper = "" , lower = ""
    for(let ch of str){
        let code = ch.charCodeAt(0)
        if(code >= 65 && code <= 90){
            upper += ch
            lower += String.fromCharCode(code + 32)
        }
        else if(code >= 97 && code <= 122){
            upper += String.fromCharCode(code - 32)
            lower += ch
        }
    }
    return {upper , lower}
}
console.log(toUppercaseLowercase("HARSHit"))


// 6 -> Remove spaces from a string
function removeSpaces(str){
    let newStr = ""
    for(let ch of str){
        if(ch !== " ") newStr += ch 
    }
    return newStr
}
console.log(removeSpaces("   Harshit Kumar   "))


// 7 -> Remove special characters
function removeSpecialCharacters(str){
    let newStr = ""
    let specialCh = "!@#$%^&*()_+~{}:,.<>|;"
    for(let ch of str){
        if(!specialCh.includes(ch)) newStr += ch
    }
    return newStr
}
console.log(removeSpecialCharacters("h!a@r#s%h^i&t*"))


// 8 -> Remove duplicates from a string
function removeDuplicates(str){
    let set = new Set(str)
    return [...set].join("")
}
console.log(removeDuplicates("aabbbccc"))


// 9 -> Find ASCII value of each character
function findAsciiValue(str){
    let result = ""
    for(let ch of str){
        result += ch.charCodeAt(0) + " "
    }
    return result
}
console.log(findAsciiValue("AZazrshit"))


// 10 -> Swap case of each character
function swapCases(str){
    let newStr = ""
    for(let ch of str){
        let code = ch.charCodeAt(0)
        if(code < 91){
            newStr += String.fromCharCode(code +32)
        }
        else newStr += String.fromCharCode(code-32)
    }
    return newStr
}
console.log(swapCases("Harshit"))


// 11 -> Count frequency of characters
function countFrequency(str){
    let freq = {}
    for(let ch of str){
        freq[ch] = (freq[ch] || 0) + 1
    }
    return freq
}
console.log(countFrequency("Harshit"))


// 12 -> Find first non-repeating character
function firstNonRepeatingElement(str){
    let freq = {}
    for(let ch of str){
        freq[ch] = (freq[ch] || 0) + 1
    }
    for(let ch in freq){
        if(freq[ch] === 1) return ch
    }
    return -1
}
console.log(firstNonRepeatingElement("harshit"))


// 13 -> Find first repeating character
function firstRepeatingElement(str){
    let freq = {}
    for(let ch of str){
        freq[ch] = (freq[ch] || 0) + 1
    }
    for(let ch in freq){
        if(freq[ch] > 1) return ch
    }
    return -1
}
console.log(firstRepeatingElement("harshit"))


// 14 -> Check if two strings are 
function isAnagrams(str1 , str2){
    let n1 = str1.length , n2 = str2.length
    if(n1 !== n2) return false
    let freq = {}
    for(let ch of str1){
        freq[ch] = (freq[ch] || 0) + 1
    }
    for(let ch of str2){
        if(!freq[ch]) return false
        freq[ch]--
    }
    return true
}
console.log(isAnagrams("silent" , "listen"))

// 15 -> Sort characters of a string
function sorting(str){
    return str.split("").sort().join("")
}
console.log(sorting("Harshit"))


// 16 -> Print all substrings of a string
function printAllSubstrings(str){
    let n = str.length
    let result = []
    for(let i = 0 ; i < n ; i++){
        let sub = ""
        for(let j = i ; j < n ; j++){
            sub += str[j]
            result.push(sub)
        }
    }
    return result
}
console.log(printAllSubstrings("Harsh"))


// 17 -> Check if string contains only digits
function onlyDigits(str){
    for(let ch of str){
        if(ch < "0" || ch > "9") return false
    }
    return true
}
console.log(onlyDigits("100"))


// 18 -> Find character with maximum frequency
function maximumFrequency(str){
    let map = {}
    for(let ch of str){
        map[ch] = (map[ch] || 0) + 1
    }
    let maxValue = 0 , maxKey = null
    for(let ch in map){
        if(map[ch] > maxValue){
            maxValue = map[ch]
            maxKey = ch
        }
    }
    return maxKey
}
console.log(maximumFrequency("harshittt"))


// 19 -> Print all permutations of a string
// this question contains recursion and backtracking, i am not familier with backtracking yet so skipping this.


// 20 -> Replace spaces with %20 (URLify)
function urlify(str){
    // return str.replaceAll(" ", "%20")
    let result = ""
    for(let ch of str){
        result += ch === " " ? "%20" : ch
    }
    return result
}
console.log(urlify("I am mastering DSA"))


