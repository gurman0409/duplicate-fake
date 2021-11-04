status = "";
function preload()
{
    img = loadImage("bedroom.jpg");
}
function setup()
{
  canvas = createCanvas(700,450);
  canvas.center();
  ObjectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded()
{
  console.log("modelLoaded");
  status = true;
  ObjectDetector.detect(img, gotResults)
}

function gotResults(error, results)
{
  if (error){
    console.log(error);
  } else {
    console.log(results);
  }
}

function draw()
{
    image(img,0,0,700,450);
}