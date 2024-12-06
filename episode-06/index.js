// const = a variable that can't be changed
// let pi = 3.14159;
const PI = 3.14159;
let radius;
let circumference;

PI = 420.00;

// radius = window.prompt(`Enter the radius a circle`);
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log(circumference);


// PI = 420.69;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}