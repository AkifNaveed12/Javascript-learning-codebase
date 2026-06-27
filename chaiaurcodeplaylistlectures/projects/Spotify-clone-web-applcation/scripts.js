console.log("welcome to spotify");
//initializing the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
// console.log(masterPlay); // debugging
// console.log(typeof masterPlay);
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName(`songItem`));

let songs =[
    {songName: "Warriyo - Mortals (feat. laura Brehm) [NCS Release]", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Ceilo - Huma Huma ", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Different Heaven & Eh!de - My Heart [NCS Release]-320k", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Jinji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: "Salam-e-Ishq", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"}
]

//audioElement.play();

songItems.forEach((element, i)=>{
    //console.log(element, i);
    element.querySelector('img').src = songs[i].coverPath;
    element.querySelector('.songName').innerText = songs[i].songName;
})

//handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        console.log("playing");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        console.log("paused");
        gif.style.opacity=0;
    }
});
// console.log("Before listener");//debugging
// masterPlay.onclick = function () {
//     alert("Clicked!");
// }
console.log("After listener");
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //console.log(`timeupdate`);
    //update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    let myProgressBar = document.getElementById('myProgressBar');
    myProgressBar.value = progress;
});

myProgressBar.addEventListener(`change`, () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName(`songItemPlay`)).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName(`songItemPlay`)).forEach((element) => {
    element.addEventListener(`click`, (e)=>{
        //console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = 'songs/3.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })
})

//console.log("END OF JS"); debugging


