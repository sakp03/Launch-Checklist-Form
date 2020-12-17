// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   fetch('https://handlers.education.launchcode.org/static/planets.json')
   .then((res) => {
         return res.json();
   })
   .then((data) => {
         console.log(data);
   })
   .catch((err) => {
      console.error(err);
   });

   const div = document.getElementById("missionTarget").innerHTML;
   div.innerHTML =
   <h2>Mission Destination</h2>
      <ol>
         <li>Name: ${}</li>
         <li>Diameter: ${}</li>
         <li>Star: ${}</li>
         <li>Distance from Earth: ${}</li>
         <li>Number of Moons: ${}</li>
      </ol>
   <img src="${}"></img>

});

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
   event.preventDefault();
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       const fuelLevelValue = Number(fuelLevelInput.value);
       const cargoMassValue = Number(cargoMassInput.value);

        if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!"); 
        }

        else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false){
            alert("Make sure to enter valid name for the Pilot or Co-Pilot field!");
        }

        else if (isNaN(fuelLevelValue) === true || isNaN(cargoMassValue) === true){
            alert("Make sure to enter valid number for the Fuel Level or Cargo Mass!");
        }  
        
      document.getElementById("pilotStatus").innerHTML = '${pilotNameInput} Ready';
      document.getElementById("copilotStatus").innerHTML = '${copilotNameInput} Ready';
     
      if (fuelLevelValue < 10000){
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
      }
     
      if (cargoMassValue > 10000){
         document.getElementById("cargoStatus").innerHTML = "Cargo Mass too high for launch";
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
      }
     
      if(fuelLevelValue >= 10000 && cargoMassValue <= 10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         document.getElementById("launchStatus").style.color = "green";
      }

   });  

});