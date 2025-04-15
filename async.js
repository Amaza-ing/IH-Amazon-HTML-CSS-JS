// Asincronía: setTimeout() & setInterval()

/*
console.log("Primera linea que se ejecuta");


setTimeout(() => {
  console.log("Ejecutado después de 1 segundo");  
}, 1000)

let counter = 0;

const intervalId = setInterval(() => {
  console.log("counter: ", counter);
  counter++; 
}, 500)

setTimeout(() => {
  clearInterval(intervalId);
}, 2000);


console.log("Otra linea que se ejecuta");
*/


// Peticiones (fetch) a una API


const API_URL = "https://jsonplaceholder.typicode.com/users";


// fetch(API_URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("ha habido un error"))


/*
async function getUsers() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    console.log(data[0]);

    const user = data[0];

    console.log(user.name);
    console.log(user.address.city);
  } catch(error) {
    console.log("Algo ha ido mal");    
  }
}

getUsers();


console.log("El código ha llegado hasta aquí");
*/


const LAUNCHES_API = "https://api.spacexdata.com/v4/launches";
/*
async function getLaunches() {
  try {
    const response = await fetch(LAUNCHES_API);
    const data = await response.json();
    console.log(data);
    
    data.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;
      const imgElement = document.createElement("img");   

      imgElement.setAttribute("src", patchImage);
      imgElement.setAttribute("width", 200);
      document.body.appendChild(imgElement);
    })
  } catch(error) {
    console.log(error);    
  }
}

getLaunches();
*/


// Promises

const directions = [
  "Starting point: Ironhack Madrid",
  "➔ Turn right towards P. de la Chopera",
  "← At the roundabout, take the 1st exit onto P. de la Chopera",
  "* Lune Creperie P. de la Chopera 33, Madrid",
];

function obtainDirections(step) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log(directions[step]);      
      
      if (!directions[step]) {
        reject("Instructions not found");
      } else {
        resolve();
      }

    }, 1000);
  })
}

// obtainDirections(0)
//   .then(() => obtainDirections(1))
//   .then(() => obtainDirections(2))
//   .then(() => obtainDirections(3))
//   .then(() => console.log("Destination reached"))
//   .catch((error) => console.log(error));


async function getDirections() {
  try {
    await obtainDirections(0);
    await obtainDirections(1);
    await obtainDirections(2);
    await obtainDirections(3);
    console.log("Destination reached");    
  } catch(error) {
    console.log(error);    
  }
}

getDirections();