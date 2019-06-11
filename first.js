const toBeDeleted = arr => {
    const counted = {};
    let biggestCount = 0;

    for (let el of arr) {
        if (!counted[el]) {
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
};

// console.log(toBeDeleted([1, 2, 6, 3, 4, 2, 0]));
console.log(toBeDeleted([1, 2, 6, 3, 4, 0]));