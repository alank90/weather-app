// get_weather.js
const express = require("express");
const router = express.Router();
const degToCompass = require("../js/degToCompass");

const request = require("request");
const apiKey = "ffb27a3af8cae8c9cbf286a767e2df37";

/* GET weather for a city. */
router.post("/", function(req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}&type=like`;

  request(url, function(err, response, body) {
    if (err) {
      res.render("index", { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);

      if (weather.cod === "404") {
        res.render("index", {
          weather: weather.cod,
          error: weather.message
        });
      } else {
        let wind_speed = Math.trunc(weather.wind.speed);
        let windDirection = degToCompass(weather.wind.deg);
        res.render("get_weather", {
          weather: weather,
          city: weather.name,
          weather_icon: weather.weather[0].icon,
          temp: weather.main.temp,
          currentConditions: weather.weather[0].description,
          humidity: weather.main.humidity,
          pressure: weather.main.pressure,
          wind: wind_speed,
          wind_direction: windDirection,
          error: null
        });
      }
    }
  });
});

module.exports = router;
