function convertToValidStr(str) {
    const validChars = "abcdefghijklmnopqrstuvwxyz";
    const strLower = str.toLowerCase();
    let validStr = "";
    for (let c of strLower) {
        if (validChars.includes(c)) {
            validStr += c;
        }
    }
    return validStr;
}

function isPalindrome(str) {
    const validStr = convertToValidStr(str);
    let i = 0;
    while (i < validStr.length / 2) {
        if (validStr[i] !== validStr[validStr.length - 1 - i]) {
            return false;
        }
        i++;
    }
    return true;
}

console.log(isPalindrome("Race Car"));
