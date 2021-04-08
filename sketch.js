var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(410,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(690,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(100,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(295,580,200,30);
    block4.shapeColor = "magenta";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityY = 2
    ball.velocityX = 2

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0
        ball.velocityY = 0

        music = false 
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "yellow";
        music.play();
    }




    ball.bounceOff(block3)
    ball.bounceOff(block4)
    ball.bounceOff(block2)
    ball.bounceOff(block1)
    

    drawSprites();
}
