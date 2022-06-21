// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */

//                  `<h2>Mission Destination</h2>
//                  <ol>
//                     <li>Name: ${json[Number(random)].name}</li>
//                     <li>Diameter: ${json[Number(random)].diameter}</li>
//                     <li>Star: ${json[Number(random)].star}</li>
//                     <li>Distance from Earth: ${json[Number(random)].distance}</li>
//                     <li>Number of Moons: ${json[Number(random)].moons}</li>
//                  </ol>
//                  <img src="${json[Number(random)].image}">`            
 }

function validateInput(testInput) {
    let testInput = document[testForm].value;
    // let button = document.querySelector("formSubmit");
    // button.addEventListener("click", function(event) {
    //    
    //    alert("Empty. Please!");
    // event.preventDefault();

    if (testInput === ""){
        return "Empty";
    }
    if (isNaN(testInput)){
        return "Is Not a Number";
    } else {
        return "Is a Number";
    }
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // let pilotName = document.testForm.pilotName.value;
    // let copilotName = document.testForm.copilotName.value;
    // let fuelLevel = document.testForm.fuelLevel.value;
    // let cargoMass = document.testForm.cargoMass.value;
    
    if (validateInput(pilot) === "Empty"|| validateInput(copilot) === "Empty"||validateInput(fuelLevel) ==="Empty"||validateInput(cargoLevel) ==="Empty") {
        alert("Invalid Input!")
    } else if 
        (validateInput(pilot)=== "Is a Number" ||validateInput(copilot) ==="Is a Number"||validateInput(fuelLevel) ==="Is Not a Number"||validateInput(cargoLevel) ==="Is Not a Number") {
            alert("Invalid Input!")
    } else {
      alert ("all valid!");
    }

    


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
