// opacity with html canvas api and javascirpt 

let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")

let width = canvas.width
let height = canvas.height

let opacity = 1;

function drawCircle(x,y){
  ctx.fillStyle = `rgba(0,255,0,${opacity}`;
  ctx.beginPath();

  ctx.arc(x,y,10, 0, Math.PI*2, false);
  ctx.fill();
}

canvas.addEventListener("click", e=>{
  drawCircle(e.offsetX, e.offsetY)
})

document.querySelector("#clear").addEventListener("click", ()=>{
  ctx.clearRect(0,0,width, height);
})

document.querySelector("#opacity").addEventListener("change", (e)=>{
   opacity = e.target.value;
});