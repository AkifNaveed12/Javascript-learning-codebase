class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, password, email){
        super(username)
        this.email  = email
        this.password = password
    }
    addCourse(){
        console.log(`a new course added by the teacher ${this.username}`)
    }
}

const user1  = new Teacher ("ali", "Ali.ashfaq@gmail.com", "abcdefg12345")
const user2 = new User("Hamid")

user1.addCourse()
//user2.addCourse() // no access instance of parent object
user2.logMe()
user1.logMe()



//checks 
console.log(user1 === user2)
console.log(User === Teacher)
console.log(user1 instanceof Teacher)
console.log(user1 instanceof User)