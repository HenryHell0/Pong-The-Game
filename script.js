var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ball = new object(25);
var r = new object(1);
var l = new object(1);
ball.xspeed = 1;
ball.yspeed = 0.45;
l.x = 2;
l.y = 6;
l.width = 1;
l.height = 6;
r.x = 17;
r.y = 6;
r.width= 1;
r.height = 6;

document.addEventListener("keydown", keyPressed);

function keyPressed(){
	if (event.keyCode == 38) {
		r.y -= 2;
	}
	if (event.keyCode == 40) {
		r.y += 2;
	}
	if (event.keyCode == 87) {
		l.y -= 2;
	}
	if (event.keyCode == 83) {
		l.y += 2;
	}
}

canvas.addEventListener("mousemove", mouseMove);

function mouseMove(){
	l.y = (event.clientY - 60)/20;

}


function clear(){
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.rect(0, 0, 400, 400);
	ctx.fill();
	ctx.closePath();
}

	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.rect(0, 0, 400, 400);
	ctx.fill();
	ctx.closePath();

var game = setInterval(gameTime, 1000/200);

function gameTime(){
	clear();
	ball.update();
	ball.show();
	r.y = ball.y - 3;
	r.show();
	l.update();
	l.show();
	if(collide(ball.x, ball.y, ball.width, ball.height, r.x, r.y, r.width, r.height) == true){
		ball.xspeed += 0.01;
	}
	if(collide(ball.x, ball.y, ball.width, ball.height, l.x, l.y, l.width, l.height) == true){
		ball.xspeed = 1;
	}
}
