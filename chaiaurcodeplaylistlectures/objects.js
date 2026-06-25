let mysymbol = Symbol("mykey1"); 
const jsuser = {
    name: "akif",
    age: "20",
    location: "Lahore",
    email: "akif@gmail.com",
    isloggedin : true,
    lastlogin : ["monday", "tuesday"],
    [mysymbol] : "myvalue"
}

console.log(jsuser)

//accessing elements
console.log(jsuser.name)
console.log(jsuser.isloggedin)
console.log(jsuser[mysymbol])
console.log(jsuser["email"])//incae the key is in "" we must have to use the brackets way of accessing, same for the symbol data type too.

//changing values
jsuser.name = "Muhammad Akif Naveed"
console.log(jsuser)

//we can add new elements too
jsuser.gender = "male"
console.log(jsuser)

// we can also freeze an object so no modification occurs
Object.freeze(jsuser)
jsuser.name = "Abdullah"
console.log(jsuser)//same as before no change becuase the object was freezed 


//using functions in objects
const user1 = {
    name: "akif",
    age: "20",
    location: "Lahore",
    email: "akif@gmail.com",
    isloggedin : true,
    lastlogin : ["monday", "tuesday"],
    [mysymbol] : "myvalue",
    logins : function(){
        console.log("user logged in")
    }
}
console.log(user1.logins)// anaonymous call because of the paraenthesis missing
console.log(user1.logins())//call with paraenthesis

user1.greetings = function(){
    console.log(`hello ${this.name}`)//string interpolation using backticks and placrholder, this keyword points to the current object
}
user1.greetings()
