var claw;
var toyA;
var handleWidth = 10;
var handleHeight = 80;

function startGame() {
    myGameArea.start();
    //claw = new claw(100, 0);
	toyA1 = new toyA(0,700);
	toyA2 = new toyA(100,700);
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

function toyA(x, y){
    //your code goes here...
    var cubeLength = 5;
    var gridSize = 16;
    
	/*var colourCode = ["#ffffff00","#ccc74e", "#e0d37e", "#ffffff", "#000000"]
	var colourProfile = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
						,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
						,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0
						,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0
						,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0
						,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
						,0,0,0,2,2,4,2,2,2,2,4,2,2,0,0,0
						,0,0,0,2,2,2,3,3,3,3,2,2,2,0,0,0
						,0,0,0,2,2,2,3,4,4,3,2,2,2,0,0,0
						,0,0,0,2,2,2,3,3,3,3,2,2,2,0,0,0
						,0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0
						,0,0,0,2,1,1,1,1,1,1,1,1,2,0,0,0
						,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
						,0,0,0,2,1,1,2,2,2,2,1,1,2,0,0,0
						,0,0,0,1,3,3,1,2,2,1,3,3,1,0,0,0
						,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]*/
	/*var colourCode = ["#ffffff00","#623be7","#cccccc", "#ffffff", "#000000","#8864f7"]					
	var colourProfile = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
						,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
						,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0
						,0,0,0,0,4,4,0,0,0,0,4,4,0,0,0,0
						,0,0,0,0,4,2,2,2,2,2,2,4,0,0,0,0
						,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
						,0,0,0,2,2,4,2,2,2,2,4,2,2,0,0,0
						,0,0,0,2,2,2,3,3,3,3,2,2,2,0,0,0
						,0,0,0,2,2,2,3,4,4,3,2,2,2,0,0,0
						,0,0,0,2,2,2,3,3,3,3,2,2,2,0,0,0
						,0,0,0,5,2,2,2,2,2,2,2,2,5,0,0,0
						,0,0,0,5,1,5,5,1,5,5,1,5,5,0,0,0
						,0,0,0,1,2,2,1,5,5,1,2,2,1,0,0,0
						,0,0,0,2,2,2,2,5,1,2,2,2,2,0,0,0
						,0,0,0,2,3,3,2,2,2,2,3,3,2,0,0,0
						,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]*/
	var colourCode = ["#ffffff00","#cccccc","#5d5d6b", "#ffffff", "#000000"]					
	var colourProfile = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
						,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
						,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0
						,0,0,0,0,1,2,1,2,2,1,2,1,0,0,0,0
						,0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0
						,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
						,0,0,0,2,2,4,2,2,2,2,4,2,2,0,0,0
						,0,0,0,2,2,2,3,3,3,3,2,2,2,0,0,0
						,0,0,0,2,2,2,3,4,4,3,2,2,2,0,0,0
						,0,0,0,1,2,2,3,3,3,3,2,2,1,0,0,0
						,0,0,0,2,1,2,2,2,2,2,2,1,2,0,0,0
						,0,0,0,2,2,1,1,1,1,1,3,2,2,0,0,0
						,0,0,0,2,2,2,1,1,1,3,2,2,2,0,0,0
						,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0
						,0,0,0,2,3,3,2,2,2,2,3,3,2,0,0,0
						,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
 

    var grid = [];
    //initialize a grid
    for (let i = 0; i < gridSize*gridSize; i++){
        var xOffset = i % gridSize;
        var yOffset = Math.floor(i / gridSize);
        var xpos = x + (xOffset * cubeLength);
        var ypos = y + (yOffset * cubeLength);
        grid.push(new component(cubeLength, cubeLength, colourCode[colourProfile[i]], xpos, ypos));
    }
}



function claw(x, y){
    //claw is made up of multiple components
    var armWidth = handleHeight/2;
    var armHeight = handleWidth;
    var arm0x = (x + armHeight/2) - armWidth/2;
    var arm0y = y + handleHeight;

    var arm1x = arm0x - armHeight;
    var arm1y = y + handleHeight;

    var arm2x = arm0x + armWidth;
    var arm2y = y + handleHeight;

    var clawHandle = new component(handleWidth, handleHeight, "black", x, y); // root element
    var clawArm0 = new component(armWidth, armHeight, "black", arm0x, arm0y); // horizontal bar
    var clawArm1 = new component(armHeight, armWidth, "black", arm1x, arm1y); // left arm
    var clawArm2 = new component(armHeight, armWidth, "black", arm2x, arm2y); // right arm
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = $(window).width();
        this.canvas.height = $(window).height();
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //this.interval = setInterval(updateGameArea, 20);
        // window.addEventListener('keyleft', function (e) {
        // myGameArea.key = e.keyCode;
        // })
        // window.addEventListener('keyright', function (e) {
        // myGameArea.key = e.keyCode;
        // })
    }
}