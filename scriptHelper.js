// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}"> 
                `;
}

function validateInput(testInput) {
    if (testInput === "") {
       return "Empty"
    } else if (isNaN(Number(testInput))) {
        return "Not a Number"
    } else if (Number(testInput)) {
        return "Is a Number"
   }
}



function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItems = document.getElementById("faultyItems");
    let launchStatus = document.getElementById("launchStatus");
    let form = document.querySelector("form");
   //make sure that the user entered valid info for each of the fields with the function validateInput()
    form.addEventListener("submit", function (event) {
        if ((validateInput(pilot.value) === "Empty") || (validateInput(copilot.value) === "Empty") || (validateInput(cargoLevel.value) === "Empty")) {
            alert("All Fields Are Required.");
            event.preventDefault();
        } else if ((validateInput(fuelLevel.value) === "Not a Number") || (validateInput(cargoLevel.value) === "Not a Number")) {
            alert("Enter Valid Numbers");
            event.preventDefault();
        } else{
            pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
            faultyItems.style.visibility = "visible";
            //Updating Shuttle Requirements
            if ((fuelLevel.value < 10000) && (cargoLevel.value > 10000)) {
                cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
                fuelStatus.innerHTML = "There is not enough fuel for the journey.";
                launchStatus.innerHTML = "Shuttle not ready for launch.";
                launchStatus.style.color = "red";
                event.preventDefault();
            } else if (fuelLevel.value < 10000) {
                fuelStatus.innerHTML = "There is not enough fuel for the journey.";
                launchStatus.innerHTML = "Shuttle not ready for launch.";
                launchStatus.style.color = "red";
                cargoStatus.innerHTML;
            } else if (cargoLevel.value > 10000) {
                fuelStatus.innerHTML;
                cargoStatus.innerHTML = "There is too much mass for the shuttle to take off."
                launchStatus.innerHTML = "Shuttle not ready for launch.";
                launchStatus.style.color = "red";
                event.preventDefault();
            }  else {
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                launchStatus.style.color = "green";
                launchStatus.innerHTML = "Shuttle ready for launch.";
                event.preventDefault();
            };
        };
    });
};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
        });
    console.log(planetsReturned);
    return planetsReturned;
}

//return one planet from the list with a randomly-selected index
function pickPlanet(planets) {
    let onePlanet = Math.round(Math.random() * 5);
    return planets[onePlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;


