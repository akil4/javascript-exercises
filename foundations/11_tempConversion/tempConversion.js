const convertToCelsius = function(temperature) {
  let c = (temperature - 32) * (5 / 9);
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  let f = (temperature * (9 / 5)) + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
