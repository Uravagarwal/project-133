img="";
Status="";
objects=[];

function preload()
{
    img = loadImage('bed room.jpg');
}

function setup()
{
    canvas = createCanvas(650,420);
    canvas.center();
    objectDetector = ml5.objectDetector('pocossd' , modelLoded);
    
}

function draw()
{
    image(img,0,0,614,420);
    if(Status != "")
    {
        for(i=0;i<objects.length;i++)
        {
           document.getElementById("status").innerHTML =" Object(s) Detected";
           fill("red");
           percent = floor(objects[i].confidence*100);
           text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
           nofill();
           stroke("red");
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function modelLoded()
{
    console.log("hi");
    Status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(results,error)
{
   if(error)
   {
       console.log(error);
   }
       console.log(results);
       Objects=results;
}