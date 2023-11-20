import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  if (cities) {
    cities.forEach((key) => {
      addCityToDOM(key.id, key.city, key.description, key.image);
    });
  }
  console.log("from init()");
  console.log(config.backendEndpoint);
}

//Implementation of fetch call
async function fetchCities() {
  let url = config.backendEndpoint + "/cities";
  let data = fetch(url)
  .then((data) => {
    return data.json();
  })
  .catch((error) => {
    return null;
  })
  return data;

  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  var container = document.getElementById("data");
  var newDiv = document.createElement("div");
  newDiv.className = "col-6 col-lg-3 mb-3";
  newDiv.innerHTML = `
  <a href= "pages/adventures/?city=${id}" id="${id}">
   <div class="tile"> 
     <div class="tile-text text-center">
        <h5>${city}</h5>
        <p>${description}</p> 
     </div>
       <img class="img-responsive" src="${image}" />
   </div> 
  </a> `;
  container.appendChild(newDiv);
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

}

export { init, fetchCities, addCityToDOM };
