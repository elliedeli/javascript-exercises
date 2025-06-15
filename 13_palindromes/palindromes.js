const palindromes = function(str) {
    let regex = /[^\w\s\']/g
    str = str.toLowerCase().replaceAll(regex,"");;
    str = str.replaceAll(" ","");;
    let strLength = str.length-1
    let strR = ""
    for (let i = 0; i <= strLength; i++)
    {
        if (str[i] !== (str[strLength-i]))
             return false;
    }
   return true;
};

// Do not edit below this line
module.exports = palindromes;
