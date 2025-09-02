console.log("Functions");

function sayHello() {
  console.log("Hola!"); 
}

sayHello();

function saySomething(message) {
  console.log(message);  
}

saySomething("Un mensaje!");

function sum(n1, n2) {
  const result = n1 + n2;
  console.log(result);  
}

sum(10, 5);
sum(20, 30);

function multiply(n1, n2) {
  const result = n1 * n2;
  return result;
}

const multiplyResult = multiply(2, 3);
console.log(multiplyResult);




const subtract = function(n1, n2) {
  return n1 - n2;
}

console.log(subtract(10, 7));




const divide = (n1, n2) => {
  return n1 / n2;
}

console.log(divide(40, 4));


// const toUpper = (msg) => {
//   return msg.toUpperCase();
// }

const toUpper = msg => msg.toUpperCase();

console.log(toUpper("hasta otra!"));
