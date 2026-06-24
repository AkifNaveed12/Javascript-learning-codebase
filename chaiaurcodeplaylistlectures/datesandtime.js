// date and time

let myDate = new Date();
console.log(myDate); //mili seconds format

console.log(typeof myDate);//object data type
console.log("/n/n/n Date methods /n/n/n");
//methods for various formattings of dates
console.log(myDate.toString());//local pakistan standard time
console.log(myDate.toDateString());// date specific professional format
console.log(myDate.toISOString());//ist standard format
console.log(myDate.toLocaleDateString());// dd/mm/yyyy format
console.log(myDate.toJSON()); //json format
console.log(myDate.toUTCString);

console.log("/n/n/n Object methods /n/n/n");
//object methods
console.log(myDate.getTime()); //mili seconds ready to be compare
console.log(myDate.getFullYear());//extract year
console.log(myDate.getMonth()+1);// month starts from 0 we add 1 to make it start from 1
console.log(myDate.getDay());//extracts day
console.log(myDate.getHours()); //extracts hours
console.log(myDate.getMinutes());//extracts minutes
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTimezoneOffset());

//timestraps
let timestrap = new Date("2020-01-19");
console.log(timestrap);
console.log(timestrap.getTime());//miliseconds version


console.log(Date.now());//miliseconds version of the exact moment since 1st jan , 1970


//conversion of timestrap inseconds
console.log(Math.floor(timestrap.getTime()/1000));
//or
console.log(Math.floor(Date.now()/1000));
//conversion of timestrap in minutes
console.log(Math.floor(timestrap.getTime()/1000/60));

//conversion of timestrap in hours
console.log(Math.floor(timestrap.getTime()/1000/60/60));

//conversion of timestrap in days
console.log(Math.floor(timestrap.getTime()/1000/60/60/24));

//conversion of timestrap in months
console.log(Math.floor(timestrap.getTime()/1000/60/60/24/30));

//conversion of timestrap in years
console.log(Math.floor(timestrap.getTime()/1000/60/60/24/30/12));

//conversion of time strap in weeks
console.log(Math.floor(timestrap.getTime()/1000/60/60/24/7));



