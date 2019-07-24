function maxSumMinSum(arr) {
    ////////////////////////////////////////////////////

    arr.sort();

    if (arr.length === 0) {
        console.log("empty array");
    } else if (arr.length === 1) {
        return [arr[0], arr[0]];
    } else {
        return [arr[0] + arr[1], arr[arr.length - 2] + arr[arr.length - 1]];
    }

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////

}

/**
 *          TEST
 *****************************************************/

console.log(maxSumMinSum([3]));