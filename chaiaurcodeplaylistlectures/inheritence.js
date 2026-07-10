// first through older methods

const { isValidElement } = require("react")

const user ={
    username : "akif naveed",
    email: "akif27031@gmail.com"
}

const teacher = {
    makeVideo : false
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "Js Assignement",
    fulltime : true,
    //oldway of inheritence
    __proto__: teachingSupport
}

//we can also do it out here as well
teacher.__proto__ = user;

//modern way
// syntax: Object.setPrototypeOf(kiski StylePropertyMap, kismyse inherit krni)
Object.setPrototypeOf(teachingSupport, teacher)


