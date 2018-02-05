var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

var clear = document.getElementById('clear');

var clean = function(e){
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
}

var draw = function(click){
    var x = click.offsetX;
    var y = click.offsetY;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();

    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.moveTo(x,y);
    ctx.fill();
    ctx.stroke();
}

clear.addEventListener("click", clean);
c.addEventListener("click", draw);