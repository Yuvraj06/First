function levelOne() {


    //creating objects

    player.visible = true;
    ground.visible = true;
    arrow_line.visible = true;

    arrow_line.shapeColor = "lightgray";

    //background
    background("lightgray");

    movement();

   
   




    //                                 FIRST LEVEL

    //arrow and text
    if (player.x >= 0) {
        textFont("New Times Roman"); fill("white"); textSize(40); textFont("Arial"); text("Go left", 100, 200);
        arrow_line.shapeColor = "white";
        noStroke(); shape(280, 185, 255, 160, 255, 210);


        if (keyDown("h")) {
            textFont("New Times Roman"); fill("black");
            textSize(20);

            text("go '''LEFT'''", 5, 20);
        } else {
            textFont("New Times Roman"); fill("white");
            textSize(20);

            text("Hold 'h' for hint", 5, 20);
        }



    } else {


        textAlign(CENTER, TOP); textFont("New Times Roman"); fill("white"); textSize(40); textFont("Arial"); text("You got it!\nPress 'Enter' to go to \nlevel select.", 200, 90);
    }


    //Winning mech in level 1
    createEdgeSprites();
    if (player.x >= 400)
        player.x = 200;





}