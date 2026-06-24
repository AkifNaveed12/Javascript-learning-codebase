// array practice file 01

//declaration method 01
let myArray = [1,2,3,4,5];

//declaration method 02
let myArray2 = new Array(6,7,8,9,10);

//accessing array elements
console.log(myArray);//full array dsiplay
console.log(myArray[0]);

//array methods
console.log(myArray.length);//lenght of the array is returned

//push method -> adds an element at the last && new lenght of the array is returned
console.log(myArray.push(100));//displays the new size not the actual new array
console.log(myArray);

//pop method -> removes an element from the last && removed element of array is returned
console.log(myArray.pop());//returns the removed element
console.log(myArray);//displays the array

//shift method -> removes an element from the start of the array
console.log(myArray.shift());//no parameters passed, returns the removed element
console.log(myArray);

//unshift method ->adds and element to the start, not considered good because not good for performance reasons: pc takes load, if array is big large operation whole memory addresses will change
console.log(myArray.unshift(0));//returns the new size of the array
console.log(myArray);

//indexOf method -> returns the index of the element
console.log(myArray.indexOf(100));//returns the index of the element

//includes method -> returns true or false
console.log(myArray.includes(100));//returns true or false

//join method -> returns the array as a string
console.log(myArray.join("-"));//returns the array as a string
let myArray3 = myArray.join("-");
console.log(typeof myArray3);//string

//slice method -> returns the extracted array as an array, orignal array is safe, range excluded
console.log(myArray.slice(1,3));

//splice method -> returns the extracted array as an array, orignal array is unsafe (changed ,reason: the extracted values are removed from the original array ), range included
console.log(myArray.splice(1,3));