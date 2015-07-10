thermostat = new Thermostat;

temperatureDisplayer()

var buttons = $('.controllerbutton')

$(buttons[0]).on('click', increase)
$(buttons[1]).on('click', decrease)
$(buttons[2]).on('click', resetTemperature)

$('#power_save_check_box').on( 'click', function(){
  powerSaveChangeState()
});

$('#submit_chosen_city').click(function(event) {
  event.preventDefault();
  getTemperature(fetchCity(), cityTemperatureDisplayer);
});

function temperatureDisplayer() {
  $('#temperaturedisplayer').html(thermostat.temperatureReader())
};

function increase() {
  thermostat.increase()
  temperatureDisplayer()
};

function decrease() {
  thermostat.decrease()
  temperatureDisplayer()
};

function resetTemperature() {
  thermostat.resetTemperature()
  temperatureDisplayer()
};

function powerSaveChangeState() {
  thermostat.powerSaveChangeState()
}

function fetchCity() {
  var cityName = $('#chosen_city').val()
  cityDisplayer(cityName)
  return cityName
};

function cityTemperatureDisplayer(temperature) {
  console.log(temperature)
  $('#temperature_displayed').html(temperature)
};

function cityDisplayer(cityName) {
  $('#city_temperature_displayed').html(cityName)
};
