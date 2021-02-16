// ============= SETUP Player =============

function Player() {
    this.paddle = new Paddle(175, 580, 50, 10);
}

Player.prototype.render = function() {
  this.paddle.render();
  if (bricks.length == 0 && inLevel) {
    if (confirm("Moving on to Next Round!")) {
      currLevel++;
      inLevel = false;
    } else {
      currLevel = 7;
      inLevel = false;
    }
  }
};

Player.prototype.update = function() {
  for(var key in keysDown) {
    var value = Number(key);
    if(value == 37) { // left arrow
      this.paddle.move(-4, 0);
    } else if (value == 39) { // right arrow
      this.paddle.move(4, 0);
    } else {
      this.paddle.move(0, 0);
    }
  }
};