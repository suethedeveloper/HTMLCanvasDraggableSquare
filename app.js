$(document).ready(function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  //Draw 40*40 square on canvas
  ctx.fillStyle = "#FFC02B";
  ctx.fillRect(0,0,40,40); 
  var mouseLeftX = 0;
  var mouseLeftY = 0;

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

    //Make sure that mouse has to be in the square to be able to drag
    if ((mouseX < mouseLeftX || mouseLeftX + 40 < mouseX) || (mouseY < mouseLeftY || mouseLeftY + 40 < mouseY)){
      isDragging = false;
    } else {
      isDragging = true;
    }
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
    
    //Remember cordinate where mouse has left if a user was dragging a square
    if (isDragging) {
      mouseLeftX = event.clientX;
      mouseLeftY = event.clientY;
    }
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