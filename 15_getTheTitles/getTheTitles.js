const getTheTitles = function(arr) {
    return arr.reduce((sum, current) =>
    {
        sum.push(current.title);
        return sum;
    }, [])
};

// Do not edit below this line
module.exports = getTheTitles;
