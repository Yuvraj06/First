function levelTwo(){
    player.visible =  true;
    ground.visible =  true;
    ground2.visible = true;
    ground3.visible = true;
    star.visible = true;

    movementPLUS();

    ground.shapeColor=rgb(40,59,83);
    ground2.shapeColor=rgb(249,56,0);
    ground3.shapeColor=rgb(255,182,0);

    background("white");

    jkl();

    textFont("New Times Roman"); fill("black");
    textSize(20);
    text(" Press j, k, l to change color\nMatch ground color to jump\n             Hit the star",150,50);


    if(player.collide(star)){

    gameState = "levels";

    }

    if(player.x<10){
        player.x+=10;
    }
    if(player.x>390){
        player.x-=10;
    }

    

}

function jkl(){

    if(keyDown("j")){
        player.shapeColor=rgb(40,59,83);
        sc = "1";
    }
    if(keyDown("k")){
        player.shapeColor=rgb(249,56,0);
        sc = "2"
    }
    if(keyDown("l")){
        player.shapeColor=rgb(255,182,0);
        sc = "3"
    }

}
function movementPLUS(){

    

    if (keyDown(RIGHT_ARROW) || keyDown("d")) {
        player.x += 10;
      }
      if (keyDown(LEFT_ARROW) || keyDown("a")) {
        player.x -= 10;
      }
      if (keyDown(UP_ARROW) || keyDown("w")){

        if(player.collide(ground)&&sc==="1"){
            player.velocityY = -23
        }
        if(player.collide(ground2)&&sc==="2"){
            player.velocityY = -23
        }
        if(player.collide(ground3)&&sc==="3"){
            player.velocityY = -23
        }
       
      }  
      
      player.velocityY= player.velocityY+2;
      
      player.collide(ground);
      player.collide(ground2);
      player.collide(ground3);

}