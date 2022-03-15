// Write your JavaScript code here!

window.addEventListener("load", function() {
    
    
   const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const pilotInput = document.querySelector("input[name=pilotName]");
        const copilotInput = document.querySelector("input[name=copilotName]");
        const fuelInput = document.querySelector("input[name=fuelLevel]");
        const cargoInput = document.querySelector("input[name=cargoMass]");
        const faultyItems = document.getElementById("faultyItems");   
       
         
    
    formSubmission(document, faultyItems, pilotInput.value, copilotInput.value, fuelInput.value, cargoInput.value, event);
   
    });
   
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
  
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () { 
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     let selectedPlanet = pickPlanet(listedPlanets);
     console.log(selectedPlanet);
      //addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
      addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   });
   
});
