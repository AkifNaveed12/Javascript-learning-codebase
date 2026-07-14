class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password (){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value // returns the error : stack limit reached, to avoid that we add _before the name
    }
}

const akif = new User("azhar.iqbal@gmail.com", "123465")

console.log(akif.email)
console.log(akif.password) //accessing getters
akif.password = "1234567890" //accessing setters
console.log(akif.password)

//get  == always return
//set  == no return