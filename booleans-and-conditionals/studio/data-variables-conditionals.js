// Initialize Variables below

let date = "Monday 2019-03-18"
let time = "10:05:34AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fueltempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = "100%"
let weatherStatus = "clear"
let preparedforLiftoff = true 

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

console.log(astronautCount <= 7);


// add logic below to verify all astronauts are ready

console.log(astronautStatus === "ready");

// add logic below to verify the total mass does not exceed the maximum limit of 850000
console.log(totalMassKg < maximumMassLimit);

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
console.log(fueltempCelsius >= -300 || fueltempCelsius <= -150);

// add logic below to verify the fuel level is at 100%
console.log(fuelLevel === "100%");

// add logic below to verify the weather status is clear

console.log(weatherStatus === "clear")

// Verify shuttle launch can proceed based on above conditions
if (astronautCount <= 7) 
    if (astronautStatus === "ready")
        if (totalMassKg < maximumMassLimit)
            if (fueltempCelsius >= -300 || fueltempCelsius <= -150)
                if (fuelLevel === "100%") 
                    if (weatherStatus === "clear") 
                        console.log("Liftoff! All systems are a go! Initiating launch sequence. " + "Date:",date + " Time:",time + " Astronaut Count:",astronautCount + "Crew Mass:",crewMassKg + "Fuel Mass:", fuelMassKg); 

else console.log("Launch scrubbed!");
