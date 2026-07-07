//lets make promise no 1
const promiseOne = new Promise(function(resolve, reject){
    //any Async Function i.e DB Calls, cryptography, network requests

    setTimeout(function(){
        console.log(`async task executed!`);
        resolve()//connection with the resolve arg
    }, 1000)

})//tales 2 arguments (resolve, reject)

promiseOne.then(function(){ // promise consumption,  auto argument recieving, value is returned
    console.log(`promise consumption!`)
})



//promise 2

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`promise async 2 is executed!`)
        resolve()
    }, 1000)
}).then(function(){
    console.log(`async 2 then executed`)
})