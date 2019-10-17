// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Space Shuttle";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kmTo, travelMPH, mPkConv) {
    if (mPkConv === void 0) { mPkConv = 0.621; }
    return ((kmTo * mPkConv) / travelMPH) / 24;
}
var daysToMoon = getDaysToLocation(kilometersToTheMoon, speedMph);
console.log(spacecraftName + " will take " + daysToMoon + " days to arrive.");
var daysToMars = getDaysToLocation(kilometersToMars, speedMph);
console.log(spacecraftName + " will take " + daysToMars + " days to arrive.");
// Call the function and print the outputs for the Mars trip and the moon trip:
