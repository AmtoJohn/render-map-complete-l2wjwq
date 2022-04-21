import Level from "./Levels.js";
import Level1 from "./Level1.js";
import AnimatedObject from "./AnimatedObject.js";
import NinjaSprites from "./NinjaSprites.js";

export default class GameArea {

  constructor() {
    this.ninja = new AnimatedObject(NinjaSprites.running, 60, 60, 50, 120);
    this.level = new Level(
      32,
      32,
      32,
      32,
      Level1.water,
      Level1.path,
      Level1.obstacles,
      "https://i.ibb.co/s9hsrmx/Path-And-Objects.png",
      512,
      512
    );
    this.canvas = document.getElementById("gameArea");
    this.canvas.width = 1024;
    this.canvas.height = 1024;
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(this.updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
    document.addEventListener("keydown", this.move);
    document.addEventListener("keyup", this.clearmove);
  }; 

  drawAnimatedObject = (gameObject) =>  {
    this.context.drawImage(
      gameObject.image,
      gameObject.x,
      gameObject.y,
      gameObject.width,
      gameObject.height
    );
  }; 

  move = e => {
    switch (e.key) {
      case "ArrowUp":
        this.ninja.speedY = -2;
        break;
      case "ArrowDown":
        this.ninja.speedY = 2;
        break;
      case "ArrowLeft":
        this.ninja.speedX = -2;
        break;
      case "ArrowRight":
        this.ninja.speedX = 2;
        break;
    }
  };

  clearmove = () => {
    this.ninja.speedX = 0;
    this.ninja.speedY = 0;
  };

  clear = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  
  updateGameArea = () => {
    this.clear();
    this.level.draw(this.context);
    this.ninja.update(Level1.water)
    this.ninja.draw(this.context)
    this.obstaclesVector = this.level.obstaclesVector;
  };
}
