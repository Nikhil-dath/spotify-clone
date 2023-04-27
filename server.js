console.log('welcome to spotify');
let songIndex = 0;
let audioElement  = new Audio('songs/1.mp3');
let masterPlay  =  document.getElementById('masterplay');
let gif = document.getElementById('gif');
let progressbar = document.getElementById('progressBar');
let songitems = Array.from(document.getElementsByClassName("songitem"));

let songslist = [
    {songName: "Always Legion", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Drivers License", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Wellerman", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "The Business", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Montero", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Save your tears", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Levitating", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Good 4 u", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Blinding Lights", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Head & Heart", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]


//hadling play button
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentvalue<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity  = 1;
    }

    else{ 
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity  = 0;
    }
    })

//progress bar
  audioElement.addEventListener('timeupdate',()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value = progress;
})


//update seek bar song duration
progressbar.addEventListener('change',()=>{
    audioElement.currentTime  =  (progressbar.value*audioElement.duration)/100;
})


//setup the songs list
songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songslist[i].coverPath;
    element.getElementsByClassName("songname")[0].innertext = songslist[i].songName;
})

const makeallplays = ()=> {
Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeallplays();
    songIndex = parseInt(e.target.id);
    console.log(songIndex)
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songslist[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
})
