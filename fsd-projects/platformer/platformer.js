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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
    createPlatform(500,200,100,10)
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
     createPlatform(500,200,20,500);
     createPlatform(300,650,300,150,"red")
     createPlatform(350,550,50,50)
     createPlatform(600,200,30,500)
    createPlatform(630,300,100,50)
    createBadPlatform(730,400,200,50)
    createPlatform(930,250,100,50)
    createPlatform(1100,50,50,500)
    createPlatform(1070,650,200,30)
    createPlatform(1300,550,100,50)
    createPlatform(1300,450,50,100)
    createFakePlatform(250,100,200,100)
    // TODO 2 - Create Platforms




    // TODO 3 - Create Collectables
createCollectable("diamond",900,250,30,30)


    
    // TODO 4 - Create Cannons
    createCannon("left",650,0.1)
    createCannon("left",50,2500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
