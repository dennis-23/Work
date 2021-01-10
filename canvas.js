window.addEventListener("load", () => {

  var canvas = document.querySelector("#canvas");
  var ctx = canvas.getContext("2d");

  canvas.height=window.innerHeight*.8;
  canvas.width=window.innerWidth*.8;


  var painting = false;

  function start(e){
    painting =true;
    draw(e);
  }

  function finish(){
    painting=false;
    ctx.beginPath();
  }

  function draw(e){
      if(!painting)
      return;
    
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);

  }

  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mouseup", finish);
  canvas.addEventListener("mousemove", draw);

});
