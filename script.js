console.log("Welcome to spotify")
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songname: "Love Me like you Do ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg " },
    { songname: "Cheap Thrills ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg " },
    { songname: "Dil Galti kar Bhaitha Hai ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg " },
    { songname: "Kessariya ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg " },
    { songname: "Raatan Lambiyaan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg " },
    { songname: "Shape of You", filePath: "songs/6.mp3", coverPath: "covers/6.jpg " },
    { songname: "Srivalli", filePath: "songs/7.mp3", coverPath: "covers/7.jpg " },
    { songname: "Stay ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg " }

]

songitem.forEach((element, i) => {
    console.log(element + " " + i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
    
});

//handle play and pause button 
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity = 1
       // gif.classList.remove("op1")
        //gif.classList.add("op2")
    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity = 0
      // gif.classList.remove("op2")
       //gif.classList.add("op1")

    }

})

//audioElement.play()
audioElement.addEventListener('timeupdate', () => {
  
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
   
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = (myprogressbar.value * audioElement.duration )/ 100;
})
const makeallplays= ()=>
{
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>
    {
            element.classList.remove("fa-circle-pause")
            element.classList.add("fa-circle-play")
    
    
    
    })
}
Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        makeallplays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        audioElement.currentTime = 0;
        myprogressbar.value=0;
        audioElement.play();
        gif.style.opacity = 1;
        
        
    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})