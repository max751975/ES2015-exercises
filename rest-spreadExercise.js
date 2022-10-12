
// 1. function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

const filterOutOdds = (...arr) => {
    return arr.filter(v => v%2 === 0)
}

//2. findMin
const findMin = (...nums) => Math.min(...nums)

//3. mergeObjects

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

//4. doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...val) => {
    return [...arr, ...val.map((num) => num*2)];
}

//5. removeRandom
const arr1 = [1,2,3,4,5,6,7,8,9,10]
const removeRandom = arr => {
    let index = Math.floor(Math.random()*arr.length);
    // console.log(arr[index]);
    return [...arr.slice(0, index), ...arr.slice(index+1)];
}

//6. extend 

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

//7. addKeyVal

const addKeyVal = (obj, key, val) => {
    return {...obj, key:val};
}

//8. removeKey

const removeKey = (obj, key) => {
    newObj = {...obj};
    delete newObj[key];
    return newObj;
}

//9. combine

const combine = (obj1, obj2) => {
    const newObj = {...obj1, ...obj2};
    return newObj;
}

//10. update

const update = (obj, key, value) => {
    return {...obj, key:value};
}