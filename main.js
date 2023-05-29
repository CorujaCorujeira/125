var noseX = 0;
var noseY = 0;
var difference = 0;

var rightWristX = 0;

var leftWristX = 0;

function setUp() {
    var video=createCapture(VIDEO);
    video.size(550,550);

    var canvas=createCanvas(600,600);
    canvas.position(560,150);

    var poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is loading");
}

function draw() {
    background('#969A97');
    document.getElementById("squareSide").innerHTML="largura e altura serão = "+difference+"px";
    fill("#F0093");
    stroke('F0093');
    square(noseX,noseY,difference)
}

function gotPoses (results){
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.X;
        noseY=results[0].pose.nose.Y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX=results[0].pose.leftWrist.X;
        rightWristX=results[0].pose.rightWrist.X;

        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}