// get_weather.js
var express = require("express");
var router = express.Router();

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
      let weatherIcon = weather.weather[0].icon;
      let currentConditions = weather.weather[0].description;
      let humidity = weather.main.humidity;
      let pressure = weather.main.pressure;
      let temp_min = weather.main.temp_min;
      let temp_max = weather.main.temp_max;
      let wind = weather.wind.speed;
      let wind_direction = weather.wind.deg;

      console.log(weather.name);

      if (weather.main == undefined) {
        res.render("index", {
          weather: null,
          error: "Error, please try again"
        });
      } else {
       /*  let weatherText = `It's ${weather.main.temp} degrees in ${
          weather.name
        } and the current conditions are ${weather.weather[0].description} !`; */
        res.render("get_weather", {
          weather: weather,
          city: weather.name,
          weather_icon: weatherIcon,
          temp: weather.main.temp,
          currentConditions: weather.weather[0].description,
          humidity: weather.main.humidity,
          pressure: weather.main.pressure,
          wind:  weather.wind.speed,
          wind_direction: weather.wind.deg,
          error: null
        });
      }
    }
  });
});

module.exports = router;
