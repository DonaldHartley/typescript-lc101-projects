var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(inputName, inputSpeed) {
        this.milesPerKilometer = 0.621;
        this.name = inputName;
        this.speedMph = inputSpeed;
    }
    Spacecraft.prototype.getDaysToLocation = function (kmTo) {
        return ((kmTo * this.milesPerKilometer) / this.speedMph) / 24;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
var daysToMoon = spaceShuttle.getDaysToLocation(kilometersToTheMoon);
console.log(spaceShuttle.name + " will take " + daysToMoon + " days to arrive.");
var daysToMars = spaceShuttle.getDaysToLocation(kilometersToMars);
console.log(spaceShuttle.name + " will take " + daysToMars + " days to arrive.");
