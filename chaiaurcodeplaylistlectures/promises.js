//lets make promise no 1
// const promiseOne = new Promise(function(resolve, reject){
//     //any Async Function i.e DB Calls, cryptography, network requests

//     setTimeout(function(){
//         console.log(`async task executed!`);
//         resolve()//connection with the resolve arg
//     }, 1000)
// })//tales 2 arguments (resolve, reject)
// promiseOne.then(function(){ // promise consumption,  auto argument recieving, value is returned
//     console.log(`promise consumption!`)
// })



// //promise 2
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log(`promise async 2 is executed!`)
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log(`async 2 then executed`)
// })



// //promise 3, data parsing
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({userName : `Akif Naveed Malik`, email : `hello.akifnaveed@gmail.com`})
//     }, 1000)
// }).then(function(user){
//     console.log(user)
// })

//call back chaining promise 4, learning how to avoid callback hell
//approach one (wrong one not wrorking one!)
// const promiseFour  = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = true
//         if(!error){
//             resolve({userName : `Muhammad Akif` , password : `123`})
//         }
//         else{
//             reject(`ERROR : Something went Wrong!`)//error cases
//         }
//     },1000)
// })

// const username = promiseFour.then((user) =>{
//     console.log(user)
//     return user.userName
// })
// console.log(username) // doesnt works!

//correct way 
// const promiseFour  = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = true
//         if(!error){
//             resolve({userName : `Muhammad Akif` , password : `123`})
//         }
//         else{
//             reject(`ERROR : Something went Wrong!`)//error cases
//         }
//     },1000)
// }).then((user) =>{
//     console.log(user)
//     return user.userName
// }).then((username) =>{// chaining of call back, the returned user.userName becomes the paramete rof the 2nd then()
//     console.log(`the extracted username is :${username}`)
// }).catch(function(err) {
//     console.log(err)
// })

//false error case
// const promiseFour  = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = false
//         if(!error){
//             resolve({userName : `Muhammad Akif` , password : `123`})
//         }
//         else{
//             reject(`ERROR : Something went Wrong!`)//error cases
//         }
//     },1000)
// }).then((user) =>{
//     console.log(user)
//     return user.userName
// }).then((username) =>{// chaining of call back, the returned user.userName becomes the paramete rof the 2nd then()
//     console.log(`the extracted username is :${username}`)
// }).catch(function(err) {
//     console.log(err)
// })

//promise approach 5 with finally 
// const promiseFive  = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = false
//         if(!error){
//             resolve({userName : `Muhammad Akif Malik` , password : `abcdefg`})
//         }
//         else{
//             reject(`ERROR : Something went Wrong in promise 5!`)//error cases
//         }
//     },1000)
// }).then((user) =>{
//     console.log(user)
//     return user.userName
// }).then((username) =>{// chaining of call back, the returned user.userName becomes the paramete rof the 2nd then()
//     console.log(`the extracted username from promise 5 oject is :${username}`)
// }).catch(function(err) {
//     console.log(err)
// }).finally(
//     console.log(`the promise was either fullfilled or either rejected!`)
// )

//promise 6 : using async await 
// const promiseSix = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         let err1 = false
//         if(!err1){
//             resolve({semester : "Five - 5", gpa : "3.94/4.0", cgpa : "3.70/4.0"})
//         }
//         else{
//             reject(`ERROR 06: Something went wrong in promise 6`)
//         }
//     }, 1000)
    
// })

// async function consumePromiseSix(){
//     const response = await promiseSix
//     console.log(response)
// }

// consumePromiseSix()

//promise 7 same approach but with proper error handling using try catch()
const promiseSeven = new Promise(function (resolve, reject){
    setTimeout(function(){
        let err1 = false
        if(!err1){
            resolve({semester : "Five - 5", gpa : "3.94/4.0", cgpa : "3.70/4.0", section : "BSE - 5B"})
        }
        else{
            reject(`ERROR 07: Something went wrong in promise 6`)
        }
    }, 1000)
    
})

async function consumePromiseSeven(){ // graceful error handling now
    try{
        const response = await promiseSeven
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseSeven()

//key notes we have to approaches like using .then(), catch(), finally() or by using try(), catch() inside async/ await


