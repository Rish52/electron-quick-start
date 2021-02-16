function level5()
{
  ball = new Ball(200, 500);
  makeWalls();
    numBricks = 10;
    xPos = 90;
    yPos = 300;
  // Line 1.
  var changes = false;
  for (i = 0; i < numBricks; i++)
  {
    if (i == numBricks/2) {
        bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "double-speed", 0));
    } else if (i == 8) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "nuclear", 0));
    } else if (i % 3 == 0) {
        bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "metal", 0));
    } else if (changes) {
        bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "woodOnTop", 0));
        changes = false;
    } else {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
      changes = true;
    }
    xPos = xPos + 20;
  }
  
  // Line 2.
  xPos = 110;
  yPos += 20;
  numBricks = 8;
  for(i = 0; i < numBricks; i++)
  {
    if (i <= 1) {
        bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "double-speed", 0));
    } else if (i % 2 == 0) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "metal", 0));
    } else {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "woodOnTop", 0));
    }
    xPos = xPos + 20;
  }

  // Line 3.
  xPos = 100;
  yPos += 20;
  numBricks = 10;
  for(i = 0; i < numBricks; i++)
  {
    if (i % 2 == 0) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    } else {
        bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "woodOnTop", 0));
    }
    xPos = xPos + 20;
  }

  // Line 4.
  xPos = 100;
  yPos += 20;
  numBricks = 10;
  for(i = 0; i < numBricks;i++)
  {
    if (i % 4 == 0) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "wood", 0));
    } else if (i % 2 == 0) {
        bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "metal", 0));
    } else if (i % 3 == 0) {
        bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "nuclear", 0));
    } else if (i == 5) {
      bricks.push(new Brick(xPos, yPos, brickSize, brickSize, "double-speed", 0));
    }
    xPos = xPos + 20;
  }
}