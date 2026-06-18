const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countlabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
};

decreaseBtn.onclick = function(){
    count--;
    if (count <0){
        count = 0;
    };
    countLabel.textContent = count;
};
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    window.alert("Counter Reset SUccessfully!");

};