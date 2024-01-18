noseX = 0;
noseY = 0;
diffrence = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    video.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Intialized");
}

function draw() {
    background("#969A97");
    fill('#f90093');
    stroke('#f90093');
    square(noseX, noseY, diffrence);
    document.getElementById("square_side").innerHTML ="width and height of square is" + diffrence;
}

function gotPoses(results)
 { 
    if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX =" + noseX + "noseY =" + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    diffrence = floor(leftWristX - rightWristX);

    console.log("leftWristX" +leftWrist+ "rightWristX" +rightWristX+ "diffrence" +diffrence);
  }   
 } 