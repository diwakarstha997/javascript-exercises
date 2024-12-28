const convertToCelsius = function(tempretureInFahrenheit) {
  let tempretureInCelsius = 0;

  tempretureInCelsius = (tempretureInFahrenheit - 32) * 5 / 9;

  return Number(tempretureInCelsius.toFixed(1));
};

const convertToFahrenheit = function(tempretureInCelsius) {
  let tempretureInFahrenheit = 0;

  tempretureInFahrenheit = (tempretureInCelsius * 9 / 5) + 32;

  return Number(tempretureInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
