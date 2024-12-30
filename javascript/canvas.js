const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");

// Set ukuran canvas
canvas.width = 550;
canvas.height = 330;

// Variabel untuk menggambar
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let strokeColor = "#000";
let lineWidth = 5;

// Event Listener untuk warna dan ukuran
const colorPicker = document.getElementById("color-picker");
const lineWidthInput = document.getElementById("line-width");

colorPicker.addEventListener("input", (e) => (strokeColor = e.target.value));
lineWidthInput.addEventListener("input", (e) => (lineWidth = e.target.value));

// Mulai menggambar
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Berhenti menggambar
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// Clear canvas
document.getElementById("clear-canvas").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
