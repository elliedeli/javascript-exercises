const convertToCelsius = function(fahrTemp) {

  return Math.round(((fahrTemp-32)*(5/9)).toFixed(1) * 10) / 10;
};

const convertToFahrenheit = function(celTemp) {
  return Math.round((celTemp * (9/5) + 32).toFixed(1)* 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
