var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 475, damage: 10},
          { type: "sawblade", x: 600, y: groundY - 475, damage: 15},
          { type: "sawblade", x: 800, y: groundY - 475, damage: 20},
          { type: "sawblade", x: 400, y: groundY - 475, damage: 25},
          { type: "sawblade", x: 600, y: groundY - 475, damage: 30},
          { type: "sawblade", x: 800, y: groundY - 475, damage: 35},
          { type: "sawblade", x: 1000, y: groundY - 475, damage: 40},
          { type: "sawblade", x: 1200, y: groundY - 475, damage: 45},
          { type: "sawblade", x: 1400, y: groundY - 475, damage: 50},
          { type: "reward", x: 2000, y: groundY - 10, speed: 4, image: "img/blue gem.png", offsetX: -25, offsetY: -25, scale: 0.8},
          { type: "marker", x: 1800, y: groundY - 50, speed: 3, image: "img/yellow gem.png", offsetX: -25, offsetY: -25, scale: 0.8},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 1000, y: groundY - 70, speed: 3, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 900, y: groundY - 70, speed: 10, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 800, y: groundY - 70, speed: 6, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 700, y: groundY - 70, speed: 11, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 1200, y: groundY - 70, speed: 3, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 1300, y: groundY - 70, speed: 10, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 1500, y: groundY - 70, speed: 6, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 1700, y: groundY - 70, speed: 11, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "reward", x: 1800, y: groundY - 10, speed: 4, image: "img/blue gem.png", offsetX: -25, offsetY: -25, scale: 0.8},
          { type: "enemy", x: 1900, y: groundY - 70, speed: 3, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 2000, y: groundY - 70, speed: 10, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 2100, y: groundY - 70, speed: 6, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 2200, y: groundY - 70, speed: 11, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 2300, y: groundY - 70, speed: 3, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 2400, y: groundY - 70, speed: 10, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 2500, y: groundY - 70, speed: 6, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 2600, y: groundY - 70, speed: 11, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "reward", x: 2700, y: groundY - 10, speed: 4, image: "img/blue gem.png", offsetX: -25, offsetY: -25, scale: 0.8},
          { type: "enemy", x: 2900, y: groundY - 70, speed: 3, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 3000, y: groundY - 70, speed: 10, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 3100, y: groundY - 70, speed: 6, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 3200, y: groundY - 70, speed: 11, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 3300, y: groundY - 70, speed: 3, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 3400, y: groundY - 70, speed: 10, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 3500, y: groundY - 70, speed: 6, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 3600, y: groundY - 70, speed: 11, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "reward", x: 3700, y: groundY - 10, speed: 4, image: "img/blue gem.png", offsetX: -25, offsetY: -25, scale: 0.8},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
