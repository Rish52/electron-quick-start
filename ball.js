function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.x_speed = 0;
    this.y_speed = 3;
    this.radius = 5;
  }
  Ball.prototype.render = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    context.fillStyle = "#FFFAFA";
    context.fill();
  };
  var update = function() {
    ball.update();
  };
  
  Ball.prototype.update = function() {
    this.x += this.x_speed;
    this.y += this.y_speed;
  };
  
  //being able to bounce up and down
  var update = function() 
  {
    ball.update(player.paddle);
  };
  
  // Code to move the ball.
  Ball.prototype.update = function(paddle1) {
    this.x += this.x_speed;
    this.y += this.y_speed;
    var top_x = this.x - 5;
    var top_y = this.y - 5;
    var bottom_x = this.x + 5;
    var bottom_y = this.y + 5;
  
    // Hitting the left imaginary wall.
    if(this.x - 5 < 50)
    {
      this.x = 55;
      this.x_speed = -this.x_speed;
    }
    //hitting the right imaginary wall
    if(this.x +5 > 350)
    {
      this.x = 345;
      this.x_speed = -this.x_speed;
    }
    
    //imaginary top wall
    if(this.y - 5 < 250)
    {
      this.y = 255;
      this.y_speed = -this.y_speed;
    }
    if(this.y > 600)
    {
      if(numLives <= 20)
      {
        numLives += 1;
        this.y = 480;
        this.x = 200;
        this.x_speed = 0;
        this.y_speed = 3;
      }
      else
      {
        currLevel = 7;
        inLevel = true;
      }
  
    }
  
    // Hitting the bricks.
    for(i = 0; i < bricks.length; i++)
    {
      var xBrickPos = bricks[i].x; // top left x pos of brick
      var yBrickPos = bricks[i].y; // top left y pos of brick
      var brickType = bricks[i].type;
      var sideXSize = xBrickPos + brickSize;
      var sideYSize = yBrickPos + brickSize;
      if (this.x >= xBrickPos && this.x <= (xBrickPos + brickSize) 
            && this.y <= (yBrickPos + brickSize) && this.y >= yBrickPos) 
      {
        if (brickType == "wood")
        {
          bricks.splice(i, 1);
          this.y_speed = -this.y_speed;
          break;
       }
       else if(brickType == "metal")
       {
          bricks[i].numHit = bricks[i].numHit + 1;
          if(bricks[i].numHit == 3)
          {
            bricks.splice(i, 1);
          }
          this.y_speed = -this.y_speed;
          if(this.y_speed > 0)
          {
              this.y = this. y + 15;
          }
          if(this.y_speed < 0)
          {
            this.y = this.y - 15;
          }
          break;
       }
       else if(brickType == "nuclear")
       {
         bricks.splice(i , 1);
         var aboveBrickYPos = yBrickPos-20;
         var aboveBrickXPos = xBrickPos;

         var belowBrickXPos = xBrickPos;
         var belowBrickYPos = yBrickPos + 20;

         var belowRightBrickXPos = xBrickPos + 20;
         var belowRightBrickYPos = yBrickPos + 20;

         var belowLeftBrickXPos = xBrickPos - 20;
         var belowLeftBrickYPos = yBrickPos + 20;

         var rightBrickXPos = xBrickPos + 20;
         var rightBrickYPos = yBrickPos;

         var leftBrickXPos = xBrickPos - 20;
         var leftBrickYPos = yBrickPos;

         var diagonalAboveLeftBrickXPos = xBrickPos - 20;
         var diagonalAboveLeftBrickYPos = yBrickPos - 20;

         var diagonalAboveRightBrickXPos = xBrickPos + 20;
         var diagonalAboveRightBrickYPos = yBrickPos - 20;

        
  
         var x = 0;
         while (x < bricks.length) {
          var connectXPos = bricks[x].x;
          var connectYPos = bricks[x].y;
          if((connectYPos == aboveBrickYPos && connectXPos == aboveBrickXPos) || 
              (connectYPos == rightBrickYPos && connectXPos == rightBrickXPos) || 
              (connectXPos == leftBrickXPos && connectYPos == leftBrickYPos) ||
              (connectXPos == diagonalAboveLeftBrickXPos && connectYPos == diagonalAboveLeftBrickYPos) || 
              (connectXPos == diagonalAboveRightBrickXPos && connectYPos == diagonalAboveRightBrickYPos) ||
              (connectXPos == belowBrickXPos && connectYPos == belowBrickYPos) ||
              (connectXPos == belowRightBrickXPos && connectYPos == belowRightBrickYPos) ||
              (connectXPos == belowLeftBrickXPos && connectYPos == belowLeftBrickYPos))
            {
              console.log("connectXPos %d\n", connectXPos);
              console.log("connectYPos %d\n", connectYPos);
              bricks.splice(x, 1);
            } else {
              x++;
            }
         }
         this.y_speed = -this.y_speed;
         break;
       }
       else if(brickType == "double-speed")
       {
        bricks.splice(i, 1);
        this.y_speed = (-1.5) * this.y_speed;
        break;
       }
       else if(brickType == "woodOnTop")
       {
         bricks.splice(i, 1, new Brick(xBrickPos, yBrickPos, brickSize, brickSize, "metal", 0));
         this.y_speed = -this.y_speed;
         break;
       }
       
    }
  }
  
    if(top_y > 300) {
      if(top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y && top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x) {
        // hit the player's paddle
        this.y_speed = -3;
        this.x_speed += (paddle1.x_speed / 2);
        this.y += this.y_speed;
      }
    }
  };