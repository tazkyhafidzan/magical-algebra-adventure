document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    var bgMusic = document.getElementById("bgMusic");
    bgMusic.play();

    // var animateSpeech = document.querySelector(".speech-rectangle");
    // var animateGirl = document.querySelector(".girlBiasa");
    // animateSpeech.classList.add("animate-speech");
    // animateGirl.classList.add("animate-girlBiasa");
  }
});
