//lets make promise
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
