let songs = [
  { title: "Song 1", src: "song1.webm" },
  { title: "Song 2", src: "song2.webm" },
  { title: "Song 3", src: "song3.webm" }
];

let currentSong = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("songTitle");

function loadSong(index) {
  audio.src = songs[index].src;
  title.textContent = songs[index].title;

}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play(); 
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
}

document.getElementById("playBtn").addEventListener("click", () => {
  audio.play();
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  audio.pause();
});

document.getElementById("nextBtn").addEventListener("click", nextSong);
document.getElementById("prevBtn").addEventListener("click", prevSong);

loadSong(currentSong); 
