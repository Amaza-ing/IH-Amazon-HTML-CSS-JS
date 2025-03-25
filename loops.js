console.log("Loops");


// for loop

for(let i = 0; i <= 10; i++) {
  console.log(i);
}

const nameArray = ["Alberto", "Beatriz", "Carlos", "Daniel"];

for(let i = 0; i < nameArray.length; i++) {
  console.log(nameArray[i]);  
}


// while loop

let counter = 1;

while (counter <= 100) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}


// for of loop

for(const username of nameArray) {
  console.log(username);  
}



console.log("El código ha llegado hasta aquí");
