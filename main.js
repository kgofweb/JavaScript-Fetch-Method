// DOM element
const img = document.getElementById('img');

fetch("https://api.thecatapi.com/v1/images/search")
   .then(response => response.json())
   .then(data => img.src= data[0].url)
         

// URL wrong
const img = document.getElementById('img');

fetch("https://api.thecatapi.com/v1/images/search")
   .then (response => {
      if (response.ok) {
         response.json()  // Return json
         .then(data => {
            img.src = data[0].url
         })
      }
      else {
         console.log("Error", response.status + ' url erronée');
         document.querySelector('.error').innerHTML = "Erreur 404";
      }
   });

