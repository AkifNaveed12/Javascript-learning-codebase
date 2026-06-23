// let x=3.99
// console.log(Math.round(x));
// console.log(Math.floor(x));
// console.log(Math.ceil(x));

// //random no generator

// let random = Math.floor(Math.random() * 100) +1;
// console.log(random);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomNum1, randomNum2, randomNum3;
myButton.onclick = function () {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
};


//if statements
let age = 25;
if(age>=18){
    console.log("you are old enough to drive!");
}else{
    console.log("you are not old enough to drive!");
}

let isStudent = true;
if(isStudent){
    console.log("you are a student!");
}
else{
    console.log("you are not a student!");
}