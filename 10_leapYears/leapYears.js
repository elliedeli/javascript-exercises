const leapYears = function(year) {
     //[year is divisible by 4] AND [year is NOT divisible by 100 OR year IS divisible by 400]
     return ((year%4==0) && (year%100!==0||year%400==0))
};

// Do not edit below this line
module.exports = leapYears;
