const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weather App' });
});

module.exports = router;

// weather-app key - ffb27a3af8cae8c9cbf286a767e2df37
