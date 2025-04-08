// Selección de elementos del DOM

const title = document.getElementById("main-title");
console.log(title);

const items = document.getElementsByClassName("list-item");
console.log(items);
console.log(items[0]);
console.log(items[0].textContent);

const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(paragraphs.length);
console.log(paragraphs[1]);

const h1 = document.querySelector("h1");
console.log(h1);

const pageTitle = document.querySelector("#main-title");
console.log(pageTitle);

const listItems = document.querySelectorAll(".list-item");
console.log(listItems);


// DOM Manipulation

title.textContent = "Nuevo Título!";

const container = document.querySelector(".container");
container.innerHTML = "<p><strong>Lorem ipsum dolor sit amet.</strong></p>";

const input = document.querySelector("#input");
input.value = "Value cambiado";
console.log(input.value);


const link = document.querySelector("#link");
console.log(link);
link.textContent = "Ir a Google";
link.setAttribute("href", "https://www.google.com");
console.log(link.getAttribute("href"));


title.style.backgroundColor = "yellow";
// document.body.style.backgroundColor = "#eeeeee";


const ul = document.querySelector("ul");
console.log(ul);
ul.classList.add("list");

listItems[0].classList.remove("blue");

paragraphs[0].classList.add("blue");
paragraphs[1].classList.add("blue");



const h2 = document.createElement("h2");
h2.textContent = "Contenido dinámico para el h2";
container.appendChild(h2);

const subtitle = document.querySelector("#subtitle");
console.log(subtitle);
subtitle.remove();

// listItems[2].remove();
// paragraphs[0].remove();
// ul.remove();

console.log(ul.innerHTML);
ul.innerHTML = "";


// Eventos

const btn = document.querySelector("#btn");
console.log(btn);

btn.addEventListener("click", () => {
  // alert("El botón se ha clicado!");
  console.log("El botón se ha clickado!");  
})

input.addEventListener("input", () => {
  console.log(input.value);  
})

const form = document.querySelector("#form");
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Formulario enviado");
})

const darkBtn = document.querySelector("#btn-dark");
console.log(darkBtn);

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
})