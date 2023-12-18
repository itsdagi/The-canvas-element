let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")

ctx.fillStyle="red"

ctx.beginPath();
ctx.moveTo(100, 100)
ctx.lineTo(150, 5)
ctx.lineTo(200, 100)
ctx.lineTo(100, 100)
ctx.fill();