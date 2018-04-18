// get_weather.js
var express = require("express");
var router = express.Router();

const request = require("request");
const apiKey = "ffb27a3af8cae8c9cbf286a767e2df37";

/* GET weather for a city. */
router.post("/", function(req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  request(url, function(err, response, body) {
    if (err) {
      res.render("index", { weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      let weatherIcon = weather.weather[0].icon;

      if (weather.main == undefined) {
        res.render("index", {
          weather: null,
          error: "Error, please try again"
        });
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${
          weather.name
        } and the current conditions are ${weather.weather[0].description} !`;
         res.render("get_weather", { weather: weatherText, weather_icon: weatherIcon, error: null });
      }
    }
  });
});
 
module.exports = router;
