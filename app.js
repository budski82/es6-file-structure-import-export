import { country, state, city } from "./src/location.js";
import { weather, f_temp } from "./src/weather.js";

const getWeather = weather();
const currentWeather = `<h2>Weather ${getWeather}</h2>`;
const currentLocation = `<h1> ${country} | ${state} | ${city} </h1>`;

//document.getElementById('app').innerHTML = `${currentLocation} ${currentWeather}`;
console.log( `${currentLocation} ${currentWeather}`);
console.log(f_temp);

console.log('BOO World!!');