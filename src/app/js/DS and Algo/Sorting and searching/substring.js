/*
linear time function for finding if a string is substring of another 


*/
function isSubstring(base, child) {
    if (child.length > base.length)
        return -1;
    let j = 0; let index = 0;
    for (let i = 0; i < base.length; i++) {
        if (base[i] === child[j]) {
            if (j === 0)
                index = i;
            j++;
            if (j === child.length)
                return index;
        }
        else {
            i = i - j;
            j = 0;
        }
    }
    return -1;
}
console.log(isSubstring("jeevan", "eva"));