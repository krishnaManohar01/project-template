const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(bg)
background(bg)

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    
    {
    var response = await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson=await response.json()
    var datetime=responsejson.datetime
    var hour=datetime.slice(11,13)
    console.log(hour)
    
    if(hour>=04&&hour<=05)
    {
     bg=("sunrise1.png")
 }
    else if (hour>06&&hour<=08)
    {
      bg = loadImage("sunrise2.png")
    }
    else if(hour>=23&& hour ==0)
    {
    bg =loadImage("sunset10.png")
    }

    else if (hour==0&& hour<=03)
    {
        bg=loadImage("sunset11.png")
    }
    else if (hour==03&& hour<=06)
    {
        bg=loadImage("sunset12.png")
    }


    }
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here
    }
