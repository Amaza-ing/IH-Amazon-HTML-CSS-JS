/*
const myArray = ["a", "b", "c"];
console.log(myArray);

myArray.push("d");
console.log(myArray);
console.log(myArray.length);
*/


// Callbacks


function sayHello() {
  console.log("Hello!");  
}

sayHello();

function sayGoodbye() {
  console.log("Goodbye!");  
}

sayGoodbye();


function saySomething(message) {
  console.log(message);  
}

saySomething("Soy un mensaje");
saySomething("Soy otro mensaje");

function executeFunction(callback) {
  console.log("--------------------");
  callback();
  console.log("--------------------");
}

executeFunction(sayHello);
executeFunction(sayGoodbye);
executeFunction(saySomething);

function executeFunction2(cb) {
  cb("Estoy siendo ejecutado desde executeFunction2");
};

executeFunction2(saySomething);


// const sayPatata = () => {
//   console.log("patata");  
// }

executeFunction(() => {
  console.log("patata");  
})


// Métodos de los Array

const numArray = [10, 20, 30, 40];
console.log(numArray);

const countries = ["España", "Italia", "Armenia"];
console.log(countries);

const products = [
  {
    name: "Ordenador",
    price: 1000,
    isAvailable: true
  },
  {
    name: "Teclado",
    price: 50,
    isAvailable: true
  },
  {
    name: "Ratón",
    price: 20,
    isAvailable: false
  }
];
console.log(products);


// forEach

numArray.forEach((number) => {
  console.log(number * 2);    
})

countries.forEach((country) => {
  console.log(country);  
})

products.forEach((product) => {
  console.log(product);  
})


// map

const doubleNumbers = numArray.map((number) => {
  return number * 2;
})
console.log(doubleNumbers);
console.log(numArray);

const tripleNumbers = numArray.map((number) => number * 3);
console.log(tripleNumbers);

const lowerCountries = countries.map((country) => country.toLowerCase());
console.log(lowerCountries);
console.log(countries);

const priceArray = products.map((product) => product.price);
console.log(priceArray);

const productsCopy = structuredClone(products);

const productsWithIVA = productsCopy.map((product) => {
  const updatedPrice = product.price * 1.21;
  product.price = updatedPrice;
  return product;
})
console.log(productsWithIVA);
console.log(products);


// filter

const bigNumbers = numArray.filter((number) => number >= 25);
console.log(bigNumbers);

const filteredCountries = countries.filter((country) => country.charAt(0) === "A");
console.log(filteredCountries);

const availableProducts = products.filter((product) => product.isAvailable);
console.log(availableProducts);


// Reduce

const sumResult = numArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sumResult);

const countriesConcat = countries.reduce((acc, curr) => {
  return acc + " " + curr;
}, "");
console.log(countriesConcat);

const totalPrice = products.reduce((acc, product) => {
  return acc + product.price;
}, 0)
console.log(totalPrice);


// Sort

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// numbers.sort();

numbers.sort((a, b) => a - b);
console.log(numbers);

countries.sort((a, b) => b.length - a.length);
console.log(countries);

const myProductsCopy = structuredClone(products);

myProductsCopy.sort((a, b) => a.price - b.price);
console.log(myProductsCopy);
console.log(products);

// const sortedNumbers = numbers.toSorted((a, b) => a - b);
// console.log(sortedNumbers);

// const sortedCountries = countries.toSorted((a, b) => b.length - a.length);
// console.log(sortedCountries);

// const sortedProducts = products.toSorted((a, b) => a.price - b.price);
// console.log(sortedProducts);


// reverse

numbers.reverse();
console.log(numbers);

countries.reverse();
console.log(countries);

products.reverse();
console.log(products);

const reversedNumbers = numbers.toReversed();
console.log(reversedNumbers);

const reversedCountries = countries.toReversed();
console.log(reversedCountries);

const reversedProducts = products.toReversed();
console.log(reversedProducts);











// Paso por valor o referencia

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// b = 20;

// console.log(b);
// console.log(a);


// const o1 = {value: 100};
// const o2 = o1;

// console.log(o1);
// console.log(o2);

// o2.value = 999;

// console.log(o2);
// console.log(o1);


// Copia estructurada

// const o1 = {value: 100};
// const o2 = structuredClone(o1);

// console.log(o1);
// console.log(o2);

// o2.value = 999;

// console.log(o2);
// console.log(o1);
