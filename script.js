let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")

ctx.fillStyle="red"

ctx.beginPath();

  ctx.arc(100,100,60,0,Math.PI*2,true);

ctx.fill(); 