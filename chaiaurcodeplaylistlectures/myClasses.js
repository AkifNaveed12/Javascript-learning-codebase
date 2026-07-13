class User {
    constructor(username, email, password){
        this.email= email;
        this.password = password;
        this.username=username
    }

    //methods (properties, methods)
    encryptPassword(){
        return `${this.password}abcd`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

//instance creation
const user1 = new User("ahmad", "ahmad.ali@gail.com","sdfvhc")
console.log(user1.changeUserName())
console.log(user1.encryptPassword())


// behind the scenes without the classes !

function user(username, email, password){
    this.username = username
    this.email=email
    this.password=password
}
user.prototype.encryptedPassword = function(){
    return`${this.password}abc`
}
user.prototype.changedUserName = function (){
    return `${this.username.toUpperCase()}`
}

const user2 = new user("ashafq", "ashfaq@gmail.com","1234567")
console.log(user2.changedUserName())
console.log(user2.encryptedPassword())