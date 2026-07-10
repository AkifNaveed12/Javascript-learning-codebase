//our target  (challenge)
// let myName = "akif             "
// console.log(myName.trueLenght()) // isko by default banana hmara target ha aur ye globally avalible hona chiye her object k sath 

let myHeroes = ["thor", "Spiderman"]
let heroPower = {
    thor : "hammer",
    Spiderman : "sling",
    getSpiderPower : function (){
        console.log(`spiderman's power is ${this.Spiderman}`)
    }
}
// heroPower.akif()   ----------> error ------------->Uncaught TypeError: testobject.akif is not a function
//     at <anonymous>:1:12

//making this possble now
Object.prototype.akif = function (){
    console.log(`akif is present in all objects!`)
}

//now akif() will work with every object when called

//heroPower.akif()


// now solving the challenge
let anotherName = "AkifNaveed         "

String.prototype.trueLenght = function (){
    console.log(`${this}`)
    console.log(`the lenght is ${this.trim().length}`)
}

anotherName.trueLenght()
"abc           ".trueLenght()