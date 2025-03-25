console.log("Hola, mundo!");


// How to declare a Variable

let username = "Adrián";
console.log(username);

username = "María";
console.log(username);

const pi = 3.1416; // declaration & initialization of constant
console.log(pi);

// var myVariable = 5;
// console.log(myVariable);

// myVariable = 10;
// console.log(myVariable);


// Type of Variables

let myString = "Hola";
let myNumber = 1234;
let myBoolean = false;
let myUndefined;
let myNull = null;

console.log(myString, typeof myString);
console.log(myNumber, typeof myNumber);
console.log(myBoolean, typeof myBoolean);
console.log(myUndefined, typeof myUndefined);
console.log(myNull, typeof myNull);


// Strings

let doubleQuoteMsg = "'Hola',\n me llamo \"Adrián\"";
console.log(doubleQuoteMsg);

let singleQuoteMsg = '\'Hola\',\n me llamo "Adrián"';
console.log(singleQuoteMsg);

let templateString = `'Hola',
me llamo "${username}"`;
console.log(templateString);

let strConcat = "Hola, me llamo " + username;
console.log(strConcat);

console.log(strConcat.length);

console.log(strConcat.toUpperCase());
console.log(strConcat.toLowerCase());

let otherStr = "      otra frase     ";
console.log(otherStr);
console.log(otherStr.trim());


// Numeric operators

let num1 = 7;
let num2 = 5;

const sumResult = num1 + num2;
console.log(sumResult);

const subResult = num1 - num2;
console.log(subResult);

const mulResult = num1 * num2;
console.log(mulResult);

const divResult = num1 / num2;
console.log(divResult);

const moduleResult = num1 % num2;
console.log(moduleResult);

num1 += 1;
console.log(num1);

num1 -= 1;
console.log(num1);

num1 *= 2;
console.log(num1);

num1 /= 2;
console.log(num1);

num1++;
console.log(num1);

num1--;
console.log(num1);







