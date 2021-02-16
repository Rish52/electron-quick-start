// ============= SETUP Bricks =============
var brickSize = 20;
let bricks = []
function Brick(x, y, width, height, type, numHit) 
{
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.type = type;
  this.numHit = numHit;
}
Brick.prototype.render = function()
{
  if(this.type == "wood")
  {
    context.fillStyle = "#8B4513";
  }
  else if(this.type == "metal")
  {
    context.fillStyle = "#808080";
  }
  else if(this.type == "nuclear")
  {
    context.fillStyle = "#FF0000";
  }
  else if(this.type == "double-speed")
  {
    context.fillStyle = "#ADD8E6";
  }
  else if(this.type == "woodOnTop")
  {
    context.fillStyle ="#8B4513"

  }
  context.fillRect(this.x, this.y, this.width, this.height);
  context.strokeRect(this.x+1, this.y+1, this.width-2, this.height-2);
};