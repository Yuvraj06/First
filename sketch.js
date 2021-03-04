var gameState = "levels";
var player;
var ground, ground2, ground3;
var arrow_line;
var button1, button2, button3;
var sc;
var starI;
var star;

function preload(){

  starI = loadImage("star.png");

}

function setup() {

  player = createSprite(200, 350, 20, 20);
  player.shapeColor = "white";
  ground = createSprite(200, 365, 800, 20);
  ground.shapeColor = "gray";
  ground2 = createSprite(250,265, 400, 20);
  ground2.shapeColor = "gray";
  ground3 = createSprite(150, 165, 400, 20);
  ground3.shapeColor = "gray";
  arrow_line = createSprite(245, 185, 30, 10);
  arrow_line.shapeColor = "white";
  star = createSprite(50,50);
  star.addImage("starImg", starI);
  star.scale = 0.03;
  player.visible = false;
  ground.visible = false;
  ground2.visible = false;
  ground3.visible = false;
  arrow_line.visible = false;
  star.visible = false;

  button1 = createButton('level 1');
  button2 = createButton('level 2');
  button3 = createButton('level 3');
 

}



function draw(){ 

  if (gameState === "levels") {
    background("lightgray");
    player.visible = false;
    ground.visible = false;
    arrow_line.visible = false;
    star.visible = false;
    ground2.visible = false;
    ground3.visible=false;
    button1.show();
    button2.show();
    button3.show();
    sc = "0"

    button1.position(75,200);
    button2.position(175,200);
    button3.position(275,200);

    
  } 

  button1.mousePressed(()=>{
    gameState = "1";
    player.x = 200;
    player.y = 300;
    player.velocityY =0;
    player.velocityX=0;
  })
  button2.mousePressed(()=>{
    gameState = "2";
    player.x = 200;
    player.y = 300;
    player.velocityY =0;
    player.velocityX=0;
    player.shapeColor="black";
  })
  button3.mousePressed(()=>{
    gameState = "3";
    player.x = 200;
    player.y = 300;
    player.velocityY =0;
    player.velocityX=0;
  })


  if(keyDown("enter")){
    gameState = "levels";
    
  }




  if (gameState==="1") {
    levelOne();
    button1.hide();
    button2.hide();
    button3.hide();
   
  }


  if (gameState === "2") {
    levelTwo();
    button1.hide();
    button2.hide();
    button3.hide();
  }

  if (gameState === "3") {
    levelThree();
    button1.hide();
    button2.hide();
    button3.hide();
  }



  drawSprites();
}

function movement(){
  if (keyDown(RIGHT_ARROW) || keyDown("d")) {
    player.x += 10;
  }
  if (keyDown(LEFT_ARROW) || keyDown("a")) {
    player.x -= 10;
  }
  if ((keyDown(UP_ARROW) || keyDown("w"))&& (player.collide(ground)||player.collide(ground2)||player.collide(ground3))) {
    player.velocityY=-23;
  }  
  
  player.velocityY= player.velocityY+2;
  
  player.collide(ground);
  player.collide(ground2);
  player.collide(ground3);

  
}



