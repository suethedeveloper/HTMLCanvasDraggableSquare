$(document).ready(function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  //Draw 40*40 square on canvas
  ctx.fillStyle = "#FFC02B";
  ctx.fillRect(0,0,40,40); 

  //Initial setup
  var canvasOffset = $("#canvas").offset();
  var offsetX = canvasOffset.left;
  var offsetY = canvasOffset.top;
  var canvasWidth = canvas.width;
  var canvasHeight = canvas.height;
  var isDragging = false;

  function mouseDown(event) {
    mouseX = Number(event.clientX - offsetX);
    mouseY = Number(event.clientY - offsetY);
    isDragging = true;
  }

  function mouseMove(event) {
    mouseX = Number(event.clientX - offsetX);
    mouseY = Number(event.clientY - offsetY);

    if (isDragging) {
      //Clear initial square
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      //Re-draw a square where a user stopped dragging
      ctx.fillRect(mouseX, mouseY, 40, 40);
    }
  }

  function mouseUp(event){
    mouseX = Number(event.clientX - offsetX);
    mouseY = Number(event.clientY - offsetY);
    isDragging = false;
  }

  $("#canvas").mousedown(function(event) {
    mouseDown(event);
  });
  $("#canvas").mousemove(function(event) {
    mouseMove(event);
  });
  $("#canvas").mouseup(function(event) {
    mouseUp(event);
  });

});