// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';
let launchPrepped = false

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchPrepped = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchPrepped = false;
}

console.log("launchPrepped = ", launchPrepped);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if ((launchPrepped === true) && (launchReady === true)){
   console.log("5... 4... 3... 2... 1... Liftoff!");
} else {
   console.log("Scrub Launch! Emergency stop!");
}