//lecture 10
let myName = "AkifNaveed" // stack (Primitive values)
let yourName = myName

//before changes
console.log(myName);
console.log(yourName);
//after changes
yourName = "Abdullah"
console.log(myName);   //not same because a copy is assinged instead of the refrence unlike primitive, original is as it is
console.log(yourName);



//heap (Reference values)

let Akif = {
    name: "Akif Naveed ",
    cgpa: 3.62
}

let Azhar = Akif

//before changes
console.log(Akif);
console.log(Azhar);

//after changes
Azhar.name = "Azhar Ashfaq"
console.log(Akif);
console.log(Azhar);// both changed because both are pointing to the same reference in the heap
