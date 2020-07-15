class Obstacle {
  constructor (x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = this.game.canvas.height;
    this.health = 3;
    this.speed = 20;
  }
    runLogic(){

    }


    // enemy collision with obstacle -= 10 score;
    
    paint () {
      const context = this.game.context;
      context.save();
      context.fillStyle = '#575757';
      context.fillRect(this.x, this.y, this.width, this.height);
      context.restore();
      }
    }