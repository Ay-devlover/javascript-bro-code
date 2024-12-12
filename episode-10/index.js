// IF STATEMENTS = if a condition is true, execute some code
//                                   if not, do something else

// EXAMPLE 1
let age = 13;

if (age >= 10 ) {
    console.log("You can drive");
}
else {
    console.log("You can't drive");
}

//Example 2

let time = 14;

if (time < 12 ) {
    console.log("Good Morning");
}
else {
    console.log("Good Afternoon");
}

// Example 3

let isStudents = true;

if (isStudents) {
    console.log("You are a student");
}
else {
    console.log("You are not a student");
}

//Example 4 boolean
// let ageDrive = 18;
// let hasLicense = true;
//
// if (ageDrive >= 18) {
//     console.log("You are old enough to drive");
//
//     if (hasLicense) {
//         console.log("You have a license");
//     }
//     else {
//         console.log("You don't have a license yet");
//     }
// }
// else {
//     console.log("You must be 18+ to drive");
// }

//Example 5
// let ageUser = 200;
//
// if (ageUser >= 18) {
//     console.log("You are old enough to enter this site");
// } else if (ageUser < 0 ) {
//     console.log("Your age can't be below 0");
// } else if (ageUser >= 100) {
//     console.log("Your are TO OLD to enter this site");
// } else {
//     console.log("You must be 18+ to enter this site");
// }

//Example 6
// let ageUser = 0;
//
// if (ageUser >= 100) {
//     console.log("Your are TO OLD to enter this site");
// } else if (ageUser == 0 ) {
//     console.log("Your age can't enter, you just born");
// }
//
// else if (ageUser >= 18) {
//     console.log("You are old enough to enter this site");
// } else if (ageUser < 0 ) {
//     console.log("Your age can't be below 0");
// } else {
//     console.log("You must be 18+ to enter this site");
// }

//example 7

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let ageUser;

mySubmit.onclick = function () {
    ageUser = myText.value;
    ageUser = Number(ageUser);

    if (ageUser >= 100) {
        resultElement.textContent = `Your are TO OLD to enter this site`;
    } else if (ageUser == 0 ) {
        resultElement.textContent = `Your age can't enter, you just born`
    }
    else if (ageUser >= 18) {
        resultElement.textContent = `You are old enough to enter this site`;
    } else if (ageUser < 0 ) {
        resultElement.textContent = `Your age can't be below 0`;
    } else {
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}

