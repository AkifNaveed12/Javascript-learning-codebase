//let username;
// username = window.prompt("whats your username: ");
// console.log(username);

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `hello ${username}`;
// }


// let age = window.prompt("age : ");
// age = Number(age);
// age+=1;

// console.log(` age is ${age}` + typeof age); 


const PI =3.14;
let radius;
let circumference;

// radius = window.prompt("enter the radius of the circle: ");
radius = Number(radius);



document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI *radius;
    document.getElementById("myH3").textContent = circumference + "cm";

}