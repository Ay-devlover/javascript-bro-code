// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// 1.
// let username;

// username = window.prompt("what's your username");

// console.log(username);

// 2.
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    // console.log(`your username is ${username}`);
    document.getElementById("myH1").textContent = `Hello ${username}`;

}