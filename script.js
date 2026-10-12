const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', resize);
resize();

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('pointerdown', (e) => {
    isDrawing = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

canvas.addEventListener('pointermove', (e) => {
    if (!isDrawing) return;

    const currentX = e.clientX;
    const currentY = e.clientY;

    ctx.strokeStyle = '#00dcff';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    lastX = currentX;
    lastY = currentY;
});

canvas.addEventListener('pointerup', () => {
    isDrawing = false;
});

canvas.addEventListener('pointercancel', () => {
    isDrawing = false;
});