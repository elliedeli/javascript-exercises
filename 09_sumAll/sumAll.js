const sumAll = function(a, b) {
    let sum = 0;
    if ((a < 0 || b < 0) || !Number.isInteger(a) || !Number.isInteger(b))
    {
        return "ERROR";
    }
    for (let i = Math.min(a,b); i <= Math.max(a,b); i++)
    {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
