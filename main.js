muchX=0;
muchY=0;

function preload() {
    
        clown_much = loadImage('https://i.postimg.cc/CMWTDHGR/muschae.png');
      
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

function draw() {
    image(video, 0, 0, 300, 300);
    fill(0,0,0);
    stroke(0,0,0);
   
    image(clown_much, muchX, muchY, 60, 30);
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    muchX=  results[0].pose.nose.x -25;
    muchY= results[0].pose.nose.y  +5;
    console.log("lips x = " + results[0].pose.nose.x);
    console.log("lips y = " + results[0].pose.nose.y);
  }
}

function take_snapshot(){    
  save('myFilterImage.png');
}