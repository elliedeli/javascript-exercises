const add = function(...args) {
  let total = 0;
  for (let arg of args){
    total += arg;
  }
  return total;
	
};

const subtract = function() {
  let total = 0;
  if (arguments.length > 0)
  {
    total = arguments[0];
      for (let i = 1; i < arguments.length; i++)
    {
      total -= arguments[i];
    }
  }

  return total;
	
};

const sum = function(arr) {
  let total = 0;
	for (index of arr)
  {
    total += index 
  }
  return total;
};

const multiply = function(arr) {
  let total = arr.reduce((sum, item) => (sum *= item), 1);
  return total;
};

const power = function(a, b) {
	return a **b;
};

const factorial = function(num) {
  let total = 1;
	for (let i = 1; i <= num; i++)
  {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
