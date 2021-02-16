function level3()
{
  ball = new Ball(200, 500);
  makeWalls();
    numBricks = 10;
    xPos = 90;
    yPos = 290;
  // Line 1.
  for (i = 0; i < numBricks; i++)
  {
    if (i == numBricks/2) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "nuclear", 0));
    } else if (i % 3 == 0) {
        bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "metal", 0));
    } else {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    }
    xPos = xPos + 20;
  }
  
  // Line 2.
  xPos = 110;
  yPos += 20;
  numBricks = 8;
  for(i = 0; i < numBricks; i++)
  {
    if (i == 1) {
        bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "nuclear", 0));
    } else if (i % 2 == 0) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "metal", 0));
    } else {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    }
    xPos = xPos + 20;
  }

  // Line 3.
  xPos = 100;
  yPos += 20;
  numBricks = 10;
  for(i = 0; i < numBricks; i++)
  {
    if (i != 4 && i % 2 == 0) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    }
    xPos = xPos + 20;
  }

  // Line 4.
  xPos = 100;
  yPos += 20;
  numBricks = 9;
  for(i = 0; i < numBricks;i++)
  {
    if (i >= 3 && i <= 5) {
      if (i % 4 == 0) {
        bricks.push(new Brick(xPos, yPos + 40, brickSize, brickSize, "nuclear", 0));
      } else {
        bricks.push(new Brick(xPos, yPos + 40, brickSize, brickSize, "metal", 0));
      }
    } else if (i % 4 == 0) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "nuclear", 0));
    } else {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "metal", 0));
    }
    xPos = xPos + 20;
  }
}