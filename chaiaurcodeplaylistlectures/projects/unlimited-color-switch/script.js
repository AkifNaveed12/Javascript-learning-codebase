//generate random color
const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};


//color changing functions
let intervalId;
const startChangingColor = () => {

    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }
    console.log("startChangingColor");
    function changeBgColor(){
        console.log("startChangingColor");
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = () => {
    console.log("stopChangingColor");
    clearInterval(intervalId);
    intervalId = null;
};


//event listeners
document.querySelector("#start").addEventListener
("click",startChangingColor);

document.querySelector("#stop").addEventListener
("click",stopChangingColor);