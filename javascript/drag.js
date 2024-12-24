let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0,
  currentElement = null;

const draggableElements = document.querySelectorAll(
  "#trapesium, #segitigaSiku, #segitigaKecil"
);
const dropTarget = document.querySelector(".drop-target");
const nextButton = document.querySelector(".next");

draggableElements.forEach((element) => {
  element.addEventListener("mousedown", mouseDown);
});

function mouseDown(e) {
  e.preventDefault();
  startX = e.clientX;
  startY = e.clientY;
  currentElement = e.target;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  e.preventDefault();
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  const rect = currentElement.getBoundingClientRect();
  currentElement.style.left = rect.left - newX + "px";
  currentElement.style.top = rect.top - newY + "px";
}

function mouseUp() {
  document.removeEventListener("mousemove", mouseMove);
  document.removeEventListener("mouseup", mouseUp);
  checkAllInside();
  currentElement = null;
}

function checkAllInside() {
  let allInside = true;
  draggableElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const dropRect = dropTarget.getBoundingClientRect();
    if (
      rect.left < dropRect.left ||
      rect.top < dropRect.top ||
      rect.right > dropRect.right ||
      rect.bottom > dropRect.bottom
    ) {
      allInside = false;
    }
  });

  if (allInside) {
    nextButton.classList.add("animate-next");
  }
}
