function multiplyBy5(num){
    return num*5
}

// everything is an objet in the js, everything havr the properties of an object
//js has prototypal behaviour (uper se uper serach krty jao, ends at the object)
multiplyBy5.power = 2
// console.log(multiplyBy5(5)) // 25
// console.log(multiplyBy5.power) // 2
// console.log(multiplyBy5.prototype)  // {} --> shows that function is also an object


//making a new function
function createUser(username, score){
    this.username = username;
    this.score = score
}
//creating new methods for this createUser function that is eventually an object
createUser.prototype.increment = function (){
    this.score++ // this ives the context its necessary wrna wo ni smj skta k kion call kr ra ha isko
}
createUser.prototype.printMe = function (){
    console.log(`the price is : ${this.score}`)
}

// creating instances without new first
//const chai = createUser("chai", 25) // the issue here is k bject ki properties ma ye method add ho chuky hain 100% but they are not defined while assiging here so they
// give an error 
//const tea = createUser("tea", 230)

//chai.printMe() // TypeError: Cannot read properties of undefined (reading 'printMe') --> same issue discussed above to resolve this error we use new keyword
// new add all the declared methids too

//correct way
const Chai = new createUser("chai", 25)
const Tea = new createUser("tea", 230)

Chai.increment()
Chai.printMe()

console.log(" ")
console.log("---------------------------    TEA    --------------------------")
console.log(" ")

Tea.increment()
Tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/