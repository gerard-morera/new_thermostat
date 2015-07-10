  function getGeolocation() { navigator.geolocation.getCurrentPosition(function(position) {
    var lati = position.coords.latitude;
    var longi = position.coords.longitude;
    getTemperatureLocationService(lati, longi)
  });
};

