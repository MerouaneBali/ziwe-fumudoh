const audio = new Audio("../audio/loop.mp3");
const audioBtn = document.querySelector("#info__music");

audio.addEventListener(
  "ended",
  () => {
    audio.currentTime = 0;
    audio.play();
  },
  false
);

audioBtn.addEventListener("click", () => {
  audioBtn.classList.toggle("info__music--playing");
  audio.paused || audio.ended ? audio.play() : audio.pause();
});
