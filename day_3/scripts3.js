// let x=3.99
// console.log(Math.round(x));
// console.log(Math.floor(x));
// console.log(Math.ceil(x));

// //random no generator

// let random = Math.floor(Math.random() * 100) +1;
// console.log(random);

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 6;

let randomNum;
myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}