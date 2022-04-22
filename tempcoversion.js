let givenCelsius = 22;

function convertCelsius(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  let kelvin = celsius + 273.15;
  return { celsius, fahrenheit, kelvin };
}
console.log(convertCelsius(givenCelsius));
