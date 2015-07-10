function getTemperature(city, cityTempDisplayer) {
  $.getJSON('http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric', 
    function(response) {
      temperature = response.list[0].main.temp

      cityTempDisplayer(temperature)
  });
};

function getTemperatureLocationService(lati, longi) {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lati + "&lon=" + longi, 
    function(response) {
      console.log(response)
  });
};
