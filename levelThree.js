function levelThree(){
    player.visible = true;
    ground.visible = true;

    movement();

    background("lightgray");

    textFont("New Times Roman"); fill("white");
    textSize(20);
    text("Level 3",100,100);
}