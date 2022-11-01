const APIKey = "0e2c5ea3894d1551db528791aa63e1aa";
var city;
api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}
const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL) 

var temp = document.getElementById('temp');
var hum = document.getElementById('hum');
var windS = document.getElementById('wind');
var clearB = document.getElementById('clear');
var searchC = document.getElementById('sCity');
var searchB = document.getElementById('sbutt');
var city="";

