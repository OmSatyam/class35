var ball;
var ballPosition, database;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballref = database.ref('ball/positon');
    ballref.on("value",readPosition, showError);
}

function draw(){
    background("white");
    if(ballPosition!=undefined){
    
    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x': ballPosition.x + x,
        'y': ballPosition.y + y
    })
}
function showError(){
    console.log("getting error");
}
function readPosition(data){
    ballPosition = data.val();
    ball.x = ballPosition.x;
    ball.y = ballPosition.y;
}
