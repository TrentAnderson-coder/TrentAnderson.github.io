var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
    
    function createSawBlade (x, y, damage){
    var hitZoneSize = 25;
    var damageFromObstacle = damage;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = groundY - y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    sawBladeHitZone.rotationalVelocity = 30;
    sawBladeHitZone.addChild(obstacleImage);

    }

    function createEnemy(x, y, speed){
      var enemy = game.createGameItem("enemy", 25);
      var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX = -speed;
      enemy.rotationalVelocity = 30;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-20)
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();

      }
    }
    function createReward(x, y, speed){
      var reward = game.createGameItem("reward", 25);
      var blueSquare = draw.rect(50, 50, "blue");
      blueSquare.x = -25;
      blueSquare.y = -25;
      reward.addChild(blueSquare);
      reward.x = x;
      reward.y = y;
      game.addGameItem(reward);
      reward.velocityX = -speed;
      reward.rotationalVelocity = 30;
      reward.onPlayerCollision = function () {
        game.changeIntegrity(20)
        game.increaseScore(100);
        reward.fadeOut();
      };
      
    }
    function createMarker(x, y, speed){
      var marker = game.createGameItem("marker", 25);
      var yellowSquare = draw.rect(50, 50, "yellow");
      yellowSquare.x = -25;
      yellowSquare.y = -25;
      marker.addChild(yellowSquare);
      marker.x = x;
      marker.y = y;
      game.addGameItem(marker);
      marker.velocityX = -speed;
      marker.rotationalVelocity = 30;
      marker.onPlayerCollision = function () {
        game.changeIntegrity(50)
        game.increaseScore(100);
        marker.fadeOut();
        startLevel();
      };
      
    }




    //calls
    createSawBlade(400, groundY - 365, 10);
    createSawBlade(600, groundY - 365, 15);
    createSawBlade(800, groundY - 365, 20);
    createEnemy(1000, groundY - 50, 3);
    createEnemy(900, groundY - 50, 5);
    createEnemy(800, groundY - 50, 6);
    createEnemy(700, groundY - 50, 11);
    createReward(1200, groundY - 10, 3);
    createMarker(1600, groundY - 50, 3)



    

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
