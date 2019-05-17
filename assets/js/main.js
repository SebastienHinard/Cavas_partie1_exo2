//on recupère le canvas dans la variable c
var c=document.getElementById('voiture');
//on recupère le contect dans la variable ctx
var ctx=c.getContext('2d');
//ciel
var sky=ctx.createLinearGradient(200,0,200,400);
sky.addColorStop(0,'white');
sky.addColorStop(1,'blue');
ctx.fillStyle = sky;
ctx.fillRect(0,0,400,400);
//route
ctx.fillStyle = "grey";
ctx.fillRect(0,280,400,120);
ctx.fillStyle = "white";
ctx.fillRect(0,370,20,10);
ctx.fillRect(60,370,80,10);
ctx.fillRect(180,370,80,10);
ctx.fillRect(300,370,80,10);
//carosserie
ctx.fillStyle="#00aa4b";
ctx.fillRect(50,220,300,100);
ctx.fillRect(100,150,230,100);
//roues
ctx.lineWidth="2"
ctx.fillStyle="lightgrey";
ctx.strokeStyle="grey";
ctx.beginPath();
ctx.arc(120,315,40,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.arc(290,315,40,0,Math.PI*2,true);
ctx.fill();
ctx.stroke();
