/*
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings.

For example, given input  strings = [“ab”, “ab”, “abc”] and queries=["ab”,”abc”,”bc”], we find 2 instances of “ab”, 1 of  “abc” and 0  of “bc”. For each query, we add an element to our return array, results=[2, 1, 0].

Function Description

Complete the function matchingStrings. The function must return an array of integers representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:

strings - an array of strings to search

queries - an array of query strings

Input Format

2 Arrays of strings one with the “strings” and another with the “queries”;


Constraints

1 <= |strings[i]|, |strings[i]| <=  20



Output Format

Return an integer array of the results of all queries in order.
*/

const matchingStrings = (inpStr, queStr) => {
    const queStrMap = {};
    const arrRes = [];

    for (let el of queStr) {
        queStrMap[el] = 0;
    }

    for (let el of inpStr) {
        if (queStrMap[el] >= 0) {
            queStrMap[el]++;
        }
    }

    for (let el of queStr) {
        arrRes.push(queStrMap[el]);
    }

    return arrRes;
};

console.log(matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]));