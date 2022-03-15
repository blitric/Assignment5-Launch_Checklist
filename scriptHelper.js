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
  let missionTargert = document.getElementById("missionTarget");
  missionTargert.innerHTML = `
  <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance}</li>
      <li>Number of Moons: ${moons}</li>
  </ol>
  <img src=${imageUrl}>`;
}

function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
    } else if(isNaN(testInput)) {
        return "Not a Number";
    }
    else if(!isNaN(testInput)) {
        return "Is a Number";
    } 
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel, event) {
    
    
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty")  {
        alert("All fields are required!");
        event.preventDefault();  
        
    } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" ||
     validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid inofrmation for each field!");
       event.preventDefault(); 
      
    } else {
     
        let launchStatus = document.getElementById("launchStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if(fuelLevel >=10000 && cargoLevel <=1000) {
                list.style.visibility = "visible";
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "rgb(65, 159, 106)";
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                event.preventDefault();

            } else {

        if(fuelLevel < 10000) {
           list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            event.preventDefault();
        } 
         if(cargoLevel > 10000) {
            list.style.visibility = "visible";
             cargoStatus.innerHTML = "Cargo level too much for launch";
             launchStatus.innerHTML = "Shuttle not ready for launch";
             launchStatus.style.color = "red";
             event.preventDefault();
         } 
        }

    }  

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {    
        return response.json();   
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = planets[Math.floor(Math.random()*planets.length)];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
