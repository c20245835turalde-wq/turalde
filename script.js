console.log("hello, world");
console.log("from script.js file.");

const myname = "aljonet";
const address = "lopez";
const number = "09708256599";
let myage = 60;
let age = 16;



console.log(`my name is ${myname},  ${myage} years old.`);
console.log(`my address is ${address}.`);
console.log(`my phone number is ${number}.`);
console.log(67);

function greet(greetings, names) {
    if (Array.isArray(names)) {
        names = names.join(", ");
        return `${greetings} sa emu, ${names}!`;
    }
}
console.log(greet("mayong aga", ["aljonet", "boi", "soy", "tol", "erp"]));

const heading = document.querySelector("h1");
heading.textContent = "felizardo turalde";
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "100px";
console.log(heading.textContent);

heading.addEventListener("click", function () {
    heading.style.color = "red";
    console.log("heading was clicked");
});

const contactheading = document.querySelector("#contact h2");
console.log(contactheading);

const servicesheading = document.querySelector("#services h2");
console.log(servicesheading);

const toggleButton = document.querySelector("#switch");
const body = document.querySelector("body");
let isOff = false;

toggleButton.addEventListener("click", function () {
    isOff = !isOff;

    if (isOff) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});
