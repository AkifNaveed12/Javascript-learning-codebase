const url = `https://jsonplaceholder.typicode.com/users`
// async function getAllUsers(){
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(`Error: `, error)
//     }
//     finally{
//         console.log(`the response is fetched or rejected!`)
//     }
// }
// getAllUsers()

//doinhg the same thing using .then() thenabling (then chaining)
fetch(url).then((response)=> {
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
} )