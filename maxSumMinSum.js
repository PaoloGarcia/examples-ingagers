export function maxSumMinSum(arr) {
    if (!Array.isArray(arr)) {
        return "invalid argument type";
    }
    if (arr.length === 0) {
        return "Empty array";
    }
    const sortedArr = arr.slice().sort((a, b) => a - b);
    if (sortedArr.length === 1) {
        return [sortedArr[0], sortedArr[0]];
    } else {
        return [
            sortedArr[0] + sortedArr[1],
            sortedArr[sortedArr.length - 2] + sortedArr[sortedArr.length - 1]
        ];
    }
}

console.log(maxSumMinSum([3]));
