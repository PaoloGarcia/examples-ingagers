function convertToValidStr(str) {
    const validChars = "abcdefghijklmnopqrstuvwxyz";
    let validStr = "";
    for (let c of str.toLowerCase()) {
        if (validChars.includes(c)) {
            validStr += c;
        }
    }
    return validStr
}

function isPalindrome(str) {
    const validStr = convertToValidStr(str);

    ////////////////////////////////////////////////////

    let i = 0;
    while (i < validStr.length / 2) {
        if (validStr[i] !== validStr[validStr.length - 1 - i]) {
            return false;
        }
        i++;
    }
    return true;

    ////////////////////////////////////////////////////

    // return validStr === validStr.split("").reverse().join("");

    ////////////////////////////////////////////////////
}

/**
 *          TEST
 *****************************************************/

console.log(isPalindrome("Race Car"));