function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        
        set : function(value){
            this._email = value
        },
        get : function(){
            return this._email.toUpperCase()
        }
    })
}

const chai = new User("chai@chai.com", "1234567")
console.log(chai.email)