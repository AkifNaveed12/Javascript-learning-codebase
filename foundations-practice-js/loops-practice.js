//task 1: Print numbers 1-100, but "fizz" for multiples of 3, "buzz" 
// for multiples of 5, "fizzbuzz" for both

// for( let i = 1; i<=100; i++){
    
//     if(i%3 ==0 && i%5 == 0){
//         console.log(`fizz buzz , ${i}`)
//     }
//     else if(i%3 == 0){
//         console.log(`fizz  , ${i}`)
//     }
//     else if(i%5 == 0){
//         console.log(`buzz   , ${i}`)
//     }
//     else{
//         continue;
//     }
// }

//task 2: Reverse a string without using .reverse() — use a for loop counting backward

// let string = "hello akif naveed malik";
// let revString = "";
// for(let i = string.length -1 ; i>=0; i--){
//         revString = revString + string[i]
// }

// console.log(revString)

//Given const arr = [3,1,4,1,5,9,2,6], find the max value using a loop only (no Math.max)

// const arr = [3,1,4,1,5,9,2,6]
// let max = arr[0]
// for(let i = 1; i <arr.length ; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(`max : ${max}`)


//task 4: Given const obj = {a:1,b:2,c:3}, use for...in to print each key and value, then compute the sum of values
// const obj = {
//     a:1,
//     b:2,
//     c:3
// }
// sum = 0
// for(const [Key, value] in obj){
//     console.log(obj[Key]);
//     sum += obj[Key]
// }
// console.log(`sum: ${sum}`)

//task 5 : Use a while loop to find the first power of 2 greater than 10,000
// let i = 0
// while(true){
//     let no = 2**i;
//     if(no > 10000){
//         console.log(`the no is : ${no} at ireration no and 2 power : ${i}`)
//         break;
//     }
//     i+=1
// }