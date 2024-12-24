document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".jawaban");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("selected"));
      this.classList.add("selected");

      let sound = document.getElementById("btnWrong");
      sound.play();

      var animateSalah = document.querySelector(".salah");
      animateSalah.classList.add("animate-salah");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnCorrect = document.querySelectorAll(".jawabanBenar");

  btnCorrect.forEach((button) => {
    button.addEventListener("click", function () {
      btnCorrect.forEach((btn) => btn.classList.remove("selectedBenar"));
      this.classList.add("selectedBenar");

      let soundBenar = document.getElementById("btnCorrect");
      soundBenar.play();

      var animateBenar = document.querySelector(".benar");
      animateBenar.classList.add("animate-benar");

      var animateNext = document.querySelector(".next");
      animateNext.classList.add("animate-next");
    });
  });
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    let bgMusic = document.getElementById("bgMusic");
    bgMusic.play();

    var animateSoal = document.querySelector(".soal");
    var animateBtn = document.querySelector(".btn");
    animateSoal.classList.add("animate-soal");
    animateBtn.classList.add("animate-btn");
  }
});
