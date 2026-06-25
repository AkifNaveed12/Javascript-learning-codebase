//const instauser = new Object();

const instauser = {
    userid : "akif111",
    name : "akif",
    isloggedin : true
}
console.log(`user id is ${instauser.userid}`);

//nested objects

const regularuser = {
    email:"akif@gmail.com",
    fullname : {
        username : {
            firstname : "akif naveed malik",
            lastname : "naveed"
        }
    }
}

//accessing elements from nested objects
console.log(regularuser.email);
console.log(regularuser.fullname.username);
console.log(regularuser.fullname.username.lastname);

//incase if a property or nested object is not present we use optional chaining using ?
console.log(regularuser.fullname?.username.firstname);
console.log(regularuser.fullnameAll?.username.lastname);//returns undefined

//objects merging
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}
const obj3 = {obj1,obj2}
console.log(obj3);// resturns a nested object that is not required 

//using spreding operator
const obj4 = {...obj1,...obj2}
console.log(obj4);// returns a merged object

//using .assign() method
const obj5 = Object.assign({},obj1,obj2,obj3,obj4)
console.log(obj5);

//using .keys() method
console.log(Object.keys(obj5));

//using .values() method
console.log(Object.values(obj5));

const users = [
    {
        userid : "akif111",
        name : "akif",
        isloggedin : true
    },
    {
        userid : "azhar111",
        name : "azhar",
        isloggedin : true
    },
    {
        userid : "akif111",
        name : "akif",
        isloggedin : true
    },
    {
        userid : "azhar111",
        name : "azhar",
        isloggedin : true
    }
]

console.log(users);


//using .entries() method
console.log(Object.entries(instauser));


//.hasOwnProperty() method
console.log(instauser.hasOwnProperty("userid"));
console.log(instauser.hasOwnProperty("school"));

//objects de-structuring  const {properties you want to de-structure} = object you want to de-structured

const {userid,name,isloggedin} = instauser
console.log(userid);
console.log(name);
console.log(isloggedin);
