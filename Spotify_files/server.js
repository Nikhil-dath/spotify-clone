console.log('welcome to spotify');
let audioelement  = new Audio('songs/1.mp3');
let masterPlay  =  document.getElementById('masterplay');
let gif = document.getElementById('gif');
let progressbar = document.getElementById('progressBar');
let songitems = Array.from(document.getElementsByClassName("songitem"));


let songslist = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]


//hadling play button
masterPlay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentvalue<=0){
        audioelement.play();
        masterPlay.classList.remove( 'fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity  = 1;
    }
    else{ 
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity  = 0;
    }
    })



//progress bar
audioelement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    progressbar.value = progress;
})


//update seek bar song duration
progressbar.addEventListener('change',()=>{
    audioelement.currentTime  =  (progressbar.value*audioelement.duration)/100;
})


//setup the songs list
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songslist[i].coverPath;
    element.getElementsByClassName("songname")[0].innertext = songslist[i].songName;
})

const makeallplays = ()=> {
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeallplays();
    let songIndex = parseInt(e.target.id);
    console.log(songIndex)
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    document.getElementById('mastersongname').innerText = songslist[songIndex].songName;
    audioelement.src = 'songs/${songIndex+1}.mp3';
    audioelement.currentTime= 0;
    audioelement.play();
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');

    })
})
