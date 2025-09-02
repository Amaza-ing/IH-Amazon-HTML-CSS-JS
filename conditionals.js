console.log("Conditionals");

const age = 21;

if (age >= 18) {
  console.log("Eres mayor de edad, puedes pasar");
} else if (age >= 10) {
  console.log("tienes más de 10 años");
} else if (age < 0) {
  console.log("No puedes tener una edad negativa");
} else if (age === 1) {
  console.log("Tienes 1 año");
} else {
  console.log("Eres menor de edad, no puedes pasar");
}

if (age === "20") {
  console.log("Tienes 20 años");
}

if (age % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}


// Truthy & Falsy

let myCondition = null;

if (myCondition) {
  console.log("La condición es truthy");  
} else {
  console.log("La condición es falsy");  
}

// Truthy   |   Falsy
// true     |   false
// "dfasdf" |   ""
// 1234     |   0
//          |   undefined
//          |   null
// []       |
// {}       |


const password = "";

console.log(password.length);
console.log(!password.length);

if (!password.length) {
  console.log("La contraseña no puede estar vacía");  
}