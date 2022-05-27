console.log("Welcome To Spotify");
let songIndex = 0;
let audioElement = new Audio("../songs/music.mp3");
// const audioElement = document.getElementById("audioElement");

let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Tum Kaha ",
    filePath: "../songs/f.mp3",
    coverPath: "C:UsersConcept RecallDesktopSPOTIFYcovers/jnji1.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "../songs/m.mp3",
    coverPath: "covers/jnji2.jpg",
  },
  {
    songName: "On & On",
    filePath: "../songs/g.mp3",
    coverPath: "covers/jnji3.jpg",
  },
  {
    songName: "Closer",
    filePath: "../songs/music.mp3",
    coverPath: "covers/jnji4.jpg",
  },

  {
    songName: "Infinity",
    filePath: "../songs/gameover.mp3",
    coverPath: "covers/jnji5.jpg",
  },
];
songItems.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("i")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

audioElement.play();
// Handle play / pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events

audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  // console.log(progress);

  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});
const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.add("fa-play-circle");
      element.classList.remove("fa-pause-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllplays();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `../songs/${index}.mp3`;
      console.log(audioElement);
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
