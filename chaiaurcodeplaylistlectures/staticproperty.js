class User {
    constructor(username){
        this.username  = username
    }
    logMe(){
        console.log(`username: ${this.username}`)
    }
    static createId(){
        return "129"
    }
}

const akif = new User ("Akif Naveed")
//console.log(akif.createId() ) //returns error as it becomes inaccessable now after using static keyword

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe())