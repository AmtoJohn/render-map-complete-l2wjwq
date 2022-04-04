import Level from "./Levels.js";
import Level1 from "./Level1.js";
export default class GameArea {
  constructor() {
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
  }

  clear = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  updateGameArea = () => {
    this.clear();
    this.level.draw(this.context);
  };
}
