/* 
In an array of integers it is necessary to determine the number of items to be deleted so that the array contains only the number that is repeated more times. 
For example. 
[1, 2, 6, 3, 4, 2, 0] 
In the previous arrangement the minimum number of elements to be eliminated is 5, leaving the arrangement as [2, 2] 

Restrictions 
-Number of elements in the arrangement 
0 < = N < = 100 
-Arrangement elements 
0 <= arr[i] <= 100 

-Output 
Print an integer that represents the number of items to delete. 
*/

function toBeDeleted(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid argument type";
    }
    if (arr.length === 0) {
        return "Empty array";
    }
    const counted = {};
    let biggestCount = 0;
    for (let el of arr) {
        if (!counted.hasOwnProperty(el)) {
            counted[el] = 0;
        }
        counted[el]++;
        if (counted[el] > biggestCount) {
            biggestCount = counted[el];
        }
    }
    if (biggestCount === 1) {
        return 0;
    }
    return arr.length - biggestCount;
}

console.log(toBeDeleted([1, 2, 6, 3, 4, 2, 0]));
console.log(toBeDeleted([1, 2, 6, 3, 4, 0]));
