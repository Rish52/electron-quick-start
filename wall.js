function Wall(x, y, width, height)
{
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Wall.prototype.render = function()
{
  context.fillStyle = "#FFFAFA";
  context.fillRect(this.x, this.y, this.width, this.height);
}
