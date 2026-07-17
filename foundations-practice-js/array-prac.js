//task 1: const nums = [1,2,3,4,5,6,7,8,9,10] — use .filter() to get only even numbers
const nums = [1,2,3,4,5,6,7,8,9,10]

const myEvenNo = nums.filter((num) =>{
    return num%2 == 0
})
console.log(myEvenNo)