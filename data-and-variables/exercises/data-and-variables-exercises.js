// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
let nameOfTheSpaceShuttle = "Determination";
let shuttleSpeedMPH = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKilometer = 0.621;
console.log(typeof "nameOfTheSpaceShuttle");
console.log(typeof shuttleSpeedMPH);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKilometer);

let milesToMars = distanceToMarsKm * milesPerKilometer
console.log(milesToMars)

let hoursToMars = milesToMars / shuttleSpeedMPH
console.log(hoursToMars)

let daysToMars = hoursToMars / 24
console.log(daysToMars)

console.log(nameOfTheSpaceShuttle + " will take " + daysToMars + " days to reach Mars.")

let milesToMoon = distanceToMoonKm * milesPerKilometer
console.log(milesToMoon)

let hoursToMoon = milesToMoon / shuttleSpeedMPH
console.log(hoursToMoon)

let daysToMoon = hoursToMoon / 24
console.log(daysToMoon)

console.log(nameOfTheSpaceShuttle + " will take " + daysToMoon + " days to reach Moon.")

