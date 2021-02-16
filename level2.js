function level2()
{
  ball = new Ball(200, 500);
  makeWalls();
    numBricks = 10;
    xPos = 180;
    yPos = 270;
  // Diagonal 1.
  for (i = 0; i < numBricks; i++)
  {
    if (i == numBricks/2) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "metal", 0));
    } else {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    }
    xPos = xPos - 10;
    yPos += 20;
  }
  
  // Diagonal 2.
  xPos = 200;
  yPos = 270;
  numBricks = 10;
  for(i = 0; i < numBricks; i++)
  {
    if (i % 4 == 0) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "metal", 0));
    } else {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    }
    xPos = xPos + 10;
    yPos += 20;
  }

  // Line 3.
  xPos = 150;
  yPos =  400;
  numBricks = 5;
  for(i = 0; i < numBricks; i++)
  {
    if (i % 2 == 0) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "metal", 0));
    }
    xPos = xPos + 20;
  }
}