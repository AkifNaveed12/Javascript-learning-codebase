//method 1 of declaration
const name="abcdefg"
const repoCount = 100

//modern way
console.log(`my name is ${name} and i have ${repoCount} repositories`);
//old way
console.log(name + repoCount + "hii")


//method 2 of declaration
const getName = new String("Akif-Naveed")
console.log(getName[0]); // not an  array just key value pairs 
console.log(getName.length);


const test = new String("     hi      ");

//string methods
console.log(getName.toUpperCase());
console.log(getName.toLowerCase());
console.log(getName.indexOf("f"));
console.log(getName.charAt(3));
console.log(getName.slice(0,4));
console.log(getName.slice(-8,4));
console.log(getName.substring(0,1));
console.log(getName.split("-"));//converts into array
console.log(test.trim());

console.log(test.replace("hi", "hello"));
console.log(test.includes("hi"));
console.log(test.includes("hello"));