let siblings = ["azhar","ali", "abdulah"]
let friends = ["farhan", "hamza", "hammad", "haider"]

console.log(siblings);
console.log(friends);

//pushing friends into siblings
siblings.push(friends);
console.log(siblings);//friends are inserted in the fro of the nested array not as a single array

// //using .concat() method
console.log(siblings.concat(siblings));// not giving a single 1d merged array beacause concat doesnt pushes in original array it creates a new array original remains the same
console.log(siblings);

const newSib = siblings.concat(friends);
console.log(newSib);// gives a single 1d merged array

//by using the spread operator
const newsib2 = [...siblings, ...friends, "abdullah",12,...newSib]
console.log(newsib2);

//using flat() methos

let array = [1,2,3,[4,5,6,6,[4,5,6,[0,1]]],8,9,[1,2,3[4,5]],10]
console.log(array.flat(Infinity));//infinity auto checks the depth of the arry else you can calculate and write exact depth valye i.e 2/3

console.log(Array.isArray(array));

