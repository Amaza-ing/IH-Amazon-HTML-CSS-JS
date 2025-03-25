console.log("Arrays & Objetos");


// Arrays

const numArray = [10, 20, 30, 40];
console.log(numArray);
console.log(numArray[0]);

const nameArray = ["Alberto", "Beatriz", "Carlos"];
console.log(nameArray);
console.log(nameArray[2]);

console.log(nameArray.length);

nameArray.push("Daniel");
console.log(nameArray);

nameArray.pop();
console.log(nameArray);

nameArray.unshift("María");
console.log(nameArray);

nameArray.shift();
console.log(nameArray);


// Objetos

const book = {
  title: "Harry Potter",
  pages: 200,
  author: "J.K. Rowling"
}

console.log(book);
console.log(book.title);
console.log(book["author"]);

book.pages = 300;
console.log(book);




