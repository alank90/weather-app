/* Module to convert degrees to compass directions */

const degToCompass = num => {
  if (num > -1 && num < 361) {
    const val = Math.floor(num / 22.5 + 0.5);
    const windDir = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW"
    ];

    return windDir[val % 16];
  } else {
    return "N/A";
  }
};

module.exports = degToCompass;
