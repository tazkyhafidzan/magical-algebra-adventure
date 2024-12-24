document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    let bgMusic = document.getElementById("bgMusic");
    bgMusic.play();

    var animateContainer = document.querySelector(".container");
    var animateBoy = document.querySelector(".boy");
    var animateGirl = document.querySelector(".girl");
    animateContainer.classList.add("animate-container");
    animateBoy.classList.add("animate-boy");
    animateGirl.classList.add("animate-girl");
  }
});
