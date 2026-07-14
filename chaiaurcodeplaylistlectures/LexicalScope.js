function makeFunc(){
    const name  = "Mozzila"
    function displayName(){
        console.log(name) // this as access to the name of outer function
    } // we arent returning anything here
    return displayName; //returninh the refrence of the inner function but here it passes the refrence + lexical scope of the function
    
} // this was we get the name 

const myFunc = makeFunc()
myFunc()