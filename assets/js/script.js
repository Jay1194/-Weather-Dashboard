var APIKey = "0e2c5ea3894d1551db528791aa63e1aa";
var city;
api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL) 