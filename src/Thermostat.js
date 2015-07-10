function Thermostat() {
  this.temperature = 20;
  this.powerSave   = true;
  this.color       = this.changeColor()
};

Thermostat.prototype.increase = function() {

  if(this.powerSave === true && this.temperature < 25){
    this.temperature += 1
  }
  else if(this.powerSave === false && this.temperature < 32){
    this.temperature += 1
  }

  return this.temperature
};

Thermostat.prototype.decrease = function() {
  if(this.temperature > 10) 
    this.temperature -= 1
  return this.temperature
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false
};

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true
};

Thermostat.prototype.powerSaveChangeState = function() {
  if(this.powerSave === true) {
    this.powerSaveOff()
  }
  else {
    this.powerSaveOn()
  }
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20
};

Thermostat.prototype.temperatureReader = function() {
  return this.temperature 
};

Thermostat.prototype.changeColor = function () {
  if (this.temperature < 18) {
    return 'low';
  }
  else if (this.temperature < 25) {
    return 'medium';
  }
  else {
    return 'high';
  }
};

