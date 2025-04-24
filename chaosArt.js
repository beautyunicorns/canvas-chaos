const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function draw() {
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 50,
            0,
            Math.PI * 2
        );
        ctx.fillStyle = randomColor();
        ctx.fill();
    }
}

setInterval(draw, 500);
