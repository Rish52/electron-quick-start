// INITIAL SETUP FOR THE MAIN SCREEN
var animate = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
function(callback) { window.setTimeout(callback, 1000/60) };
// 2d context
var canvas = document.createElement('canvas');

var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');
//attach canvas on to screen
window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
};
var step = function() {
  update();
  render();
  animate(step);
};

// ============= Initializing all Objects =============
var ball = new Ball(200, 500);
let walls = []
var makeWalls = function() {
  walls.push(new Wall(30, 230, brickSize, 17*brickSize));
  walls.push(new Wall(30, 230, 16*brickSize, brickSize));
  walls.push(new Wall(350, 230, brickSize, 17*brickSize));
}

var player = new Player();
var currLevel = 1;
var inLevel = false;
var numLives = 0;
var numBricks = 8;
var xPos = 120;
var yPos = 350;

// ======== Rendering everything ===========
// function openfile(file) 
//   { 
//   window.location = "file:///" + file; 
// }

var render = function() {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, width, height);
  player.render();
  if (currLevel == 1 && !inLevel) {
    level5();
    inLevel = true;
  } else if (currLevel == 2 && !inLevel) {
    numLives = 0;
    level2();
    inLevel = true;
  } else if (currLevel == 3 && !inLevel) {
    numLives = 0;
    level3();
    inLevel = true;
  } else if (currLevel == 4 && !inLevel) {
    numLives = 0;
    level4();
    inLevel = true;
  } else if (currLevel == 5 && !inLevel) {
    numLives = 0;
    level5();
    inLevel = true;
  } else if (currLevel == 6) {
    window.location.href = "end-game.html";
  } else if (currLevel == 7) {
    window.location.href = "lose-game.html";
  }
  ball.render();
  
  for(i = 0; i < bricks.length; i++)
  {
    bricks[i].render();
  }
  for(j = 0; j < walls.length; j++)
  {
    walls[j].render();
  }
};

//adding controls
var keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});

//updating position of paddle
var update = function() {
  player.update();
  ball.update(player.paddle);
};
