// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:

function getDaysToLocation(kmTo: number, travelMPH: number, mPkConv=0.621): number {
  return ((kmTo*mPkConv)/travelMPH)/24;
}

let daysToMoon:number = getDaysToLocation(kilometersToTheMoon, speedMph);
console.log(`${spacecraftName} will take ${daysToMoon} days to arrive.`);

let daysToMars:number = getDaysToLocation(kilometersToMars, speedMph);
console.log(`${spacecraftName} will take ${daysToMars} days to arrive.`);

// Call the function and print the outputs for the Mars trip and the moon trip:
