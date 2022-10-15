//1.
new Set([1,1,2,2,3,4]) // {1,2,3,4}

//2.
// [...new Set('referee')].join("") // "ref"

//3.

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); // /* 0:{Array(3) => true} 1: {Array(3) => false} */

//4. Has Duplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length;

//5. vowelCount

function isVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    lowerCaseStr = str.toLowerCase();
    for(let char of lowerCaseStr){
        if(isVowel(char)){
            if(vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) +1);
            } else {
                vowelMap.set(char,1);
            }  
        }
    }
    return vowelMap;
}
