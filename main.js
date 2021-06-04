canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext ("2d");
color = "red";
ctx.beginPath();
ctx.srtokestyle = color;
ctx.arc= (200, 200, 40, 0, 2*Math.PI);
ctx.srtoke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color = document.getElementById ("color").value;
console.log(color);
mouse_x = e.clientX - canvas.offsetleft;
mouse_y = e.clientY - canvas.offsettop;
console.log("X =" + mouse_x + ",Y=" + mouse_y);
circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y)
{
ctx.srtokestyle = color;
ctx.beginPath();
ctx.arc= (mosue_x, mosue_y, 0, 2*Math.PI);
ctx.srtoke();
}
