function level1()
{
  ball = new Ball(200, 500);
  makeWalls();
  numBricks = 8;
  xPos = 120;
  yPos = 350;
  // Line 1.
  for (i = 0; i < numBricks; i++)
  {
    bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    xPos = xPos + 20;
  }
  
  // Line 2.
  xPos = 140;
  yPos += 20;
  numBricks = 6;
  for(i = 0; i < numBricks; i++)
  {
    bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    xPos = xPos + 20;
  }

  // Line 3.
  yPos += 20;
  xPos = 160;
  numBricks = 4;
  for(i = 0; i < numBricks; i++)
  { 
    bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    xPos = xPos + 20;
  }

  // Line 4.
  xPos = 180;
  yPos += 20;
  numBricks = 2;
  for(i = 0; i < numBricks;i++)
  {
    bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    xPos = xPos + 20;
  }
}