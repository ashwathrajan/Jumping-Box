var canvas;
var music;
var box1, box2, box3, box4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites();
    //create 4 different surfaces
    box1 = createSprite(80,590,185,20);
    box1.shapeColor = "blue";
    box2 = createSprite(290,590,185,20);
    box2.shapeColor = "red";
    box3 = createSprite(500,590,185,20);
    box3.shapeColor = "yellow";
    box4 = createSprite(710,590,185,20);
    box4.shapeColor = "green";
    //create box sprite and give velocity
    ball = createSprite(400,100,30,30);
    ball.shapeColor = "orange";
    ball.velocityY = 4;
    ball.velocityX = 2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    ball.bounceOff(edges);
    if(ball.isTouching(box1))
    {
        ball.shapeColor = box1.shapeColor;
        music.play();
    }
    if(ball.isTouching(box2))
    {
        ball.shapeColor = box2.shapeColor;
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.play();
    }
    if(ball.isTouching(box3))
    {
        ball.shapeColor = box3.shapeColor;
        music.play();
    }
    if(ball.isTouching(box4))
    {
        ball.shapeColor = box4.shapeColor;
        music.play();
    }

    
    //add condition to check if box touching surface and make it box
    drawSprites()
}
