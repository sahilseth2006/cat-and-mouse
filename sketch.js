var groundImage;
var cat,cat1,cat2,cat3,cat_running;
var mouse, mouseImg1,mouseImg2,mouseImg3;


function preload() {
    //load the images here
    groundImage=loadImage("garden.png");
  
     cat1=loadAnimation("tomOne.png");
     cat2=loadAnimation("tomTwo.png","tomThree.png");
     cat3=loadAnimation("tomFour.png");
    
      mouseImg1=loadAnimation("jerryOne.png");
      mouseImg2=loadAnimation("jerryTwo.png","jerryThree.png");
      mouseImg3=loadAnimation("jerryFour.png")
                          
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
  cat=createSprite(870,600);
  cat.addAnimation("catSleeping",cat1)
  cat.scale=0.2
  
  mouse=createSprite(200,600)
  mouse.addAnimation("standing",mouseImg1);
  mouse.scale=0.15
  
}

function draw() {

    background(groundImage);
  
  if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.collide(mouse)
    
    cat.velocity=0
    cat.addAnimation("CatlastImg",cat3)
    cat.x=300
    cat.scale=0.2
    cat.changeAnimation("CatlastImg")
    
    mouse.addAnimation("mouseLastImg",mouseImg3)
    
    mouse.scale=0.15
    mouse.changeAnimation("mouseLastImg")
    
    
  }
    //Write condition here to evalute if tom and jerry collide
  // keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",cat2)
    cat.changeAnimation("catRunning")
    
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing")
    
  }

}
