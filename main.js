var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var mouseevent = "empty";
var mouselastposx, mouselastposy;

widthvar = screen.width
heightvar = screen.height

newwidth = widthvar - 70
newheight = heightvar - 300

if (widthvar < 992){
    canvas.width = newwidth
    canvas.height = newheight
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e){
    mouselastposx = e.touches[0].clientX - canvas.offsetLeft
    mouselastposy = e.touches[0].clientY - canvas.offsetTop
}

canvas.addEventListener("touchmove", touchmovemy);
function touchmovemy(e){
    var mouseposx = e.touches[0].clientX - canvas.offsetLeft;
    var mouseposy = e.touches[0].clientY - canvas.offsetTop;
    var color = document.getElementById("icolor").value;
    var width = document.getElementById("iwidth").value;
    var radius = document.getElementById("iradius").value;
    var start = parseFloat(document.getElementById("istart").value);
    var end = parseFloat(document.getElementById("iend").value);

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(mouselastposx, mouselastposy);
    ctx.lineTo(mouseposx, mouseposy);
    ctx.stroke();

    mouselastposx = mouseposx;
    mouselastposy = mouseposy;
};

function bfclear(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
