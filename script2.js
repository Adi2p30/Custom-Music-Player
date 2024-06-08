const wrapper = document.querySelector(".wrapper"),
  musicImg = wrapper.querySelector(".img-area img"),
  musicName = wrapper.querySelector(".song-details .name"),
  musicArtist = wrapper.querySelector(".song-details .artist"),
  playPauseBtn = wrapper.querySelector(".play-pause"),
  prevBtn = wrapper.querySelector("#prev"),
  nextBtn = wrapper.querySelector("#next"),
  shuffleBtn = wrapper.querySelector("#shuffle"),
  repeatBtn = wrapper.querySelector("#repeat-plist"),
  volumeSlider = document.getElementById("volume-slider"),
  mainAudio = new Audio(), // Create a new Audio object
  progressArea = wrapper.querySelector(".progress-area"),
  progressBar = progressArea.querySelector(".progress-bar"),
  closeBtn = document.getElementById("close"),
  moreMusicBtn = document.querySelector("#more-music"),
  musicList = wrapper.querySelector(".music-list");

let musicIndex = Math.floor(Math.random() * allMusic.length);
let isMusicPaused = true;
let isShuffle = false;
let isRepeat = false;

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
});

function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb].name;
  musicArtist.innerText = allMusic[indexNumb].artist;
  document.getElementById('coverimg').src = `${allMusic[indexNumb].img}`;
  mainAudio.src = `music/${allMusic[indexNumb].src}`; // Assign src to mainAudio
}

function playMusic(){
  wrapper.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
  mainAudio.play(); // Use play() method of mainAudio
}

function pauseMusic(){
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
  mainAudio.pause(); // Use pause() method of mainAudio
}

function prevMusic(){
  if (isShuffle) {
    let randIndex = Math.floor(Math.random() * allMusic.length);
    while (randIndex === musicIndex) {
      randIndex = Math.floor(Math.random() * allMusic.length);
    }
    musicIndex = randIndex;
  } else {
    musicIndex--;
    if (musicIndex < 0) musicIndex = allMusic.length - 1;
  }
  loadMusic(musicIndex);
  playMusic();
}

function nextMusic(){
  if (isShuffle) {
    let randIndex = Math.floor(Math.random() * allMusic.length);
    while (randIndex === musicIndex) {
      randIndex = Math.floor(Math.random() * allMusic.length);
    }
    musicIndex = randIndex;
  } else {
    musicIndex++;
    if (musicIndex >= allMusic.length) musicIndex = 0;
  }
  loadMusic(musicIndex);
  playMusic();
}

playPauseBtn.addEventListener("click", ()=>{
  isMusicPaused ? playMusic() : pauseMusic();
  isMusicPaused = !isMusicPaused;
});

prevBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);

shuffleBtn.addEventListener("click", ()=>{
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle("active", isShuffle);
});

repeatBtn.addEventListener("click", ()=>{
  isRepeat = !isRepeat;
  mainAudio.loop = isRepeat;
  repeatBtn.classList.toggle("active", isRepeat);
});

mainAudio.addEventListener("timeupdate", ()=>{
  let currentTime = mainAudio.currentTime;
  let duration = mainAudio.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = wrapper.querySelector(".current-time"),
      musicDuartion = wrapper.querySelector(".max-duration");

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if(currentSec < 10) currentSec = `0${currentSec}`;
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

  let totalMin = Math.floor(duration / 60);
  let totalSec = Math.floor(duration % 60);
  if(totalSec < 10) totalSec = `0${totalSec}`;
  musicDuartion.innerText = `${totalMin}:${totalSec}`;
});

progressArea.addEventListener("click", (e)=>{
  let progressWidth = progressArea.clientWidth;
  let clickedOffsetX = e.offsetX;
  let duration = mainAudio.duration;
  
  mainAudio.currentTime = (clickedOffsetX / progressWidth) * duration;
});

mainAudio.addEventListener("ended", ()=>{
  if (isRepeat) {
    mainAudio.currentTime = 0;
    playMusic();
  } else {
    nextMusic();
  }
});

volumeSlider.addEventListener("input", ()=>{
  mainAudio.volume = volumeSlider.value;
});

closeBtn.addEventListener("click", () => {
  // Hide the music list by removing the "show" class
  musicList.classList.remove("show");
});

moreMusicBtn.addEventListener("click", () => {
  // Toggle the "show" class on the music list to show/hide it
  musicList.classList.toggle("show");

  // Get the <ul> element inside the music list
  const ulTag = musicList.querySelector("ul");

  // Clear any existing list items
  ulTag.innerHTML = '';

  // Create list items for each song and append them to the <ul> element
  allMusic.forEach((song, index) => {
    const liTag = document.createElement("li");
    liTag.setAttribute("li-index", index);

    const possible = new Audio();
    possible.src = `music/${song.src}.mp3`;
    possible.onloadedmetadata = () => {
      liTag.querySelector(".audio-duration").innerText = formatTime(possible.duration);
    };

    liTag.innerHTML = `
      <div class="row">
        <span>${song.name}</span>
        <p>${song.artist}</p>
      </div>
      <span class="audio-duration">${formatTime(0)}</span>
    `;

    ulTag.appendChild(liTag);
  });

  // Add click event listeners to each list item to play the corresponding song
  ulTag.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const index = parseInt(li.getAttribute("li-index"));
      musicIndex = index;
      loadMusic(musicIndex);
      playMusic();
    });
  });
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
