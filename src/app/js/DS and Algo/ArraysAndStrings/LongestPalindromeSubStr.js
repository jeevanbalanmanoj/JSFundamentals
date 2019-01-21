function isPal(str, start, end) {
    length = end - start + 1;
    for (let k = 0; k < length; k++) {
        if (str[start + k] !== str[start + length - 1 -k])
            return false;
    }
    return true;
}
function longestPalindromeSubstr(str) {
    let palStr;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {

        }
    }

    return str;
}


const str = "dhfbfhmalayalamdffs";

console.log(isPal("ssmalayalamss",0,"ssmalayalamss".length-1));

//console.log("Longest palindrome substring of ", str, " is ", longestPalindromeSubstr(str));