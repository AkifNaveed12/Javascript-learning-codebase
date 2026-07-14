// common interview question SWE 1,2 level, in MATH.PI we have fixed value of pie right? but can we change 
// that value if yes how? and if no then mention breifly why?


//ans is simply understandable by studing the Object.getOwnPropertyDiscriptor(objectName, property name)

//const myNewObject = Object.create() // factory function
// const Chai = {
//     name : "Akif Naveed",
//     id:123,
//     isAvaliable: true

// }

//console.log(Chai)

//now how t check that properties 
//console.log(Object.getOwnPropertyDescriptor(Chai, "name"))
//output
// {
//   value: 'Akif Naveed',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//enumerating on these but before that adding a function
const Chai = {
    name : "Akif Naveed",
    id:123,
    isAvaliable: true,
    orderChai:function(){
    console.log("chai nahi bani")
    }
}
for(let [key, value] of Object.entries(Chai)){
    if(typeof value != 'function'){    //check stops the function from printing
        console.log(`${key} : ${value}`)
    }
}

//now changing the property and lets try to enumerate
Object.defineProperty(Chai, 'name', {
    writable : false,
    enumerable: false
})

//console.log(Object.getOwnPropertyDescriptor(Chai, "name"))
//output
// {
//   value: 'Akif Naveed',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

//trying looping now
for(let [key, value] of Object.entries(Chai)){
    if(typeof value != 'function'){    //check stops the function from printing
        console.log(`${key} : ${value}`)
    }
} // no looping happens

// now the actual problem math.pi
console.log(Object.getOwnPropertyDescriptor(Math, "PI"))

//OUTPUT
// {
//   value: 3.141592653589793,
//   writable: false,   // isko chah k b ni change kia ja skta ispr itny checks hain cpp ma builtin written
//   enumerable: false,
//   configurable: false
// }