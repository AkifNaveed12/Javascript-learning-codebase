const buttons = document.querySelectorAll(`.button`);
const body =  document.querySelector(`body`);

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener(`click`, function (e) {
        // console.log(e); (just for debugging purpose)
        // console.log(e.target);
        const id = e.target.id;// id gets the color stored of the block so it is a string now 
        switch(id){//here we are passing that particular string that can be either grey/blue/yellow/white
            case "grey"://here we are simply comparing the id(string os color name) i.e grey ===another string grey, it gives true and the case executes
                //console.log("hey grey is okeyy!"); (just for debugging purpose!)
                //console.log(e.target.id);
                body.style.backgroundColor = "grey";
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                body.style.backgroundColor = `black`;
                break;
        }
        //using if approach
        // if(id === "grey"){
        //     body.style.backgroundColor = "grey";
        // }
        // else if(id === "white"){
        //     body.style.backgroundColor = "white";
        // }
        // else if(id === "blue"){
        //     body.style.backgroundColor = "blue";
        // }
        // else if(id === "yellow"){
        //     body.style.backgroundColor = "yellow";
        // }
        // else{
        //     body.style.backgroundColor = "white";
        // }
    });
});