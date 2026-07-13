function setUsername(username){
    //complex db calls
    this.username = username // this provides teh current execution context 
    // of the function
    console.log(`username set!`)
}

// function createUser(username, email, password){
//     this.email = email
//     this.password = password

//     //seting the username through the set user function
//     setUsername(username)
// }

const USER = new createUser("Akif", "hello.akifnaveed@gmail.com","abc123")
console.log(USER) 

// output
// username set!
// createUser { email: 'hello.akifnaveed@gmail.com', password: 'abc123' } 
//issue: the username is not set properly its loosing context when called in the createUser
//for this we use .call() it passes the current context of the function to anoteher function 

//solution based code
function createUser(username, email, password){
    this.email = email
    this.password = password

    //seting the username through the set user function
    setUsername.call(this,username) // providing the context that use my this (current context in which username is entered)
}


// output
// username set!
// createUser {
//   email: 'hello.akifnaveed@gmail.com',
//   password: 'abc123',
//   username: 'Akif'
// }