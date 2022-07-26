const request = require("request");
const argv = require('yargs').argv;
require('dotenv').config()

const API_KEY = process.env.API_KEY
const city = argv.c || 'kochi';
const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

request(URL, function (err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});