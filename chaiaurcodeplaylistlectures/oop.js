let users =  {
    name : "Akif",
    age : 20,
    getData : function(){
        console.log(this)
        console.log(`name : ${this.name}`)
    }
}

//console.log(users.name)
//console.log(users.getData())

//global cobtext checking
//console.log(this) // in node environmnt its empty but in browser it isnt it has multiple tuff there currrently its
//  empty {} but it 
// changes continously 

//cunstructor functions (new):

//lets first check why we need new what happens if we dont use it and create multiple instances of an oject

// let user = {
//     username : "Ali",
//     loginCount : 20,
//     isLoggedIn : false

// }
function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

//const userOne = User("Muhammad Akif Naveed", 10, false) // user no 1
//console.log(userOne) // works perfectly 

//now moving towards the issue 
//console.log(`--------------------------------- User No 2 --------------------------------------`)
//console.log(` `)


//making user 2
//const userTwo = User("Ahmad", 20, true)
//console.log(userOne)   // overrides the previous made function values beacuse no new instance was formwed do we require to 
// use new to get separate instances vor everything



console.log(` `)
console.log(`--------------------------correct way using new-------------------------------`)
console.log(` `)
// correct approach, no overriding issues, safe one

const userOne = new User("Muhammad Akif Naveed", 10, false)
console.log(userOne)
const userTwo = new User("Ahmad", 20, true)
console.log(userTwo)
