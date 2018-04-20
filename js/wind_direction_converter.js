/* Module to convert degrees to compass directions */

degToCompass = (num) => {
  const val = Math.floor((num / 22.5) + 0.5);
  const windDir = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return winDir[(val % 16)];
};

module.exports = degToCompass;

