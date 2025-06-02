$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "black"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300,650,200, 20);
    createPlatform(100,525,100, 20);
    createPlatform(400,450,300, 20);
    createPlatform(800,350,500, 20);
    createPlatform(400,250,300, 20);


    




    // TODO 3 - Create Collectables
    createCollectable("Diamond", 360, 610, 0.5, 1);
    createCollectable("Diamond", 550, 410, 0, 0);
    createCollectable("Diamond", 1000, 310, 0, 0);



    
    // TODO 4 - Create Cannons
    createCannon("left", 575, 2000);
    createCannon("top", 770, 2000);
    createCannon("left", 270, 3000);
    createCannon("right", 400, 4000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
