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
          { type: "sawblade", x: 400, y: groundY - 325, damage: 10},
          { type: "sawblade", x: 600, y: groundY - 325, damage: 15},
          { type: "sawblade", x: 800, y: groundY - 325, damage: 20},
          { type: "enemy", x: 1000, y: groundY - 70, speed: 3, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 900, y: groundY - 70, speed: 5, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 800, y: groundY - 70, speed: 6, image: "img/OIP.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "enemy", x: 700, y: groundY - 70, speed: 11, image: "img/ufo.png", offsetX: -25, offsetY: -25, scale: 0.4},
          { type: "reward", x: 1800, y: groundY - 10, speed: 4},
          { type: "marker", x: 1600, y: groundY - 50, speed: 3},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 325, damage: 10 },
          { type: "sawblade", x: 600, y: groundY - 325, damage: 10 },
          { type: "sawblade", x: 900, y: groundY - 325, damage: 10 },
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
