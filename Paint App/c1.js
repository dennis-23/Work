var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//Current unconnected points
var mouse = [];
//Existing triangles
var triangles = [];
//The function that draws
function draw() {
    //Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Draw existing triangles
    for (var tIndex = 0; tIndex < triangles.length; tIndex++) {
      var triangle = triangles[tIndex];
      ctx.beginPath();
      ctx.moveTo(triangle.a.x, triangle.a.y);
      ctx.lineTo(triangle.b.x, triangle.b.y);
      ctx.lineTo(triangle.c.x, triangle.c.y);
      ctx.closePath();
      ctx.stroke();
    }
    //Draw current mouse points
    if (mouse.length > 0) {
      ctx.beginPath();
      ctx.moveTo(mouse[0].x, mouse[0].y);
    }
    if (mouse.length > 1) {
      ctx.lineTo(mouse[1].x, mouse[1].y);
    }
    if (mouse.length > 0) {
      ctx.stroke();
    }
  }
  //Catch point
canvas.onclick = function eventHandler(event) {
  //Add points to list
  mouse.push({
    x: event.layerX,
    y: event.layerY
  });
  //If we have enough points, add a triangle
  if (mouse.length >= 3) {
    //Adding the triangle
    triangles.push({
      a: mouse[0],
      b: mouse[1],
      c: mouse[2]
    });
    //Clear points
    mouse = [];
  }
  //Update canvas
  draw();
};
