import { country, state, city } from "./src/location.js";
import { weather, f_temp } from "./src/weather.js";

const getWeather = weather();
const currentWeather = `<h2>Weather ${getWeather}</h2>`;
const currentLocation = `<h1> ${country} | ${state} | ${city} </h1>`;
let toFahrenheit = `<p>here in the US that converts to ${f_temp}, and still chilly for June 6th.`;
document.getElementById('app').innerHTML = `${currentLocation} ${currentWeather}<br> ${toFahrenheit}`;
