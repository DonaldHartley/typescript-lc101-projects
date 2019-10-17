let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

// Define your Spacecraft class here:

class Spacecraft {
  name: string;
  speedMph: number;
  milesPerKilometer: number = 0.621;
  constructor(inputName:string, inputSpeed:number) {
    this.name = inputName;
    this.speedMph = inputSpeed;
  }

  getDaysToLocation(kmTo: number): number {
    return ((kmTo*this.milesPerKilometer)/this.speedMph)/24;
  }
}

// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Print two outputs - one for the trip to Mars and one for the trip to the moon.

let daysToMoon:number = spaceShuttle.getDaysToLocation(kilometersToTheMoon);
console.log(`${spaceShuttle.name} will take ${daysToMoon} days to arrive.`);

let daysToMars:number = spaceShuttle.getDaysToLocation(kilometersToMars);
console.log(`${spaceShuttle.name} will take ${daysToMars} days to arrive.`);
