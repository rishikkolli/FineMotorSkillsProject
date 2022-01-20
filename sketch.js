recty = 300 //Designates y position for the cars body
rectr = 45 //Declares variable for the width of the cars body
recth = 60 //Declares variable for the height of the cars body
rect0 = -100 // y position for the row of lane lines above the screen
rect1 = 0 //Designates y position for the top visible row of lane lines
rect2 = 100 //Designates y position for the second row of lane lines
rect3 = 200 //Designates y position for the third row of lane lines
rect4 = 300 //Designates y position for the fourth row of lane lines
rect5 = 400 //Designates y position for the fifth row of lane lines
circle0 = -50 //y position for the red circle on very left
circle1 = -50 //y postion for the red circle on 2nd lane
circle2 = -50 //y position for the red circle on middle lane
circle3 = -50 //y position for the red circle on 4th lane
circle4 = -50 //y position for the red circle on very right lane
circlex0 = 20 //x position for the red circle on very left
circlex1 = 105 //x postion for the red circle on 2nd lane
circlex2 = 205 //x position for the red circle on middle lane
circlex3 = 305 //x position for the red circle on 4th lane
circlex4 = 395 //x position for the red circle on very right lane
var score = 0 //Declares variable for the score
this.r = 50 //Declares radius for the circles
circle0r = this.r //Designates radius for first circle
circle1r = this.r //Designates radius for the 2nd circle
circle2r = this.r //Designates radius for the 3rd circle
circle3r = this.r //Designates radius for the 4th circle
circle4r = this.r //Designates radius for the 5th circle

function setup() {
  createCanvas(400, 400); //Creates canvas
   button = createButton('back') //Creates 'back' button
   button.position(356, 380) //Determines position for the 'back' button
   button.mousePressed(back) //Declares function 'back' when the button is pressed
}


function draw() {
  background('grey') //Creates the grey street
  
  noStroke() //Declares no outline for anything
  fill('yellow') //Colors the lane lines yellow
  
  rect(50,rect0,10,50) //Off top screen very left lane line
  rect(150,rect0,10,50) //Off top screen second lane line
  rect(250,rect0,10,50) //Off top screen third lane line
  rect(350,rect0,10,50) //Off top screen very right lane line
  
  rect(50,rect1,10,50) //Top left on screen lane line
  rect(150,rect1,10,50) //Top second lane line
  rect(250,rect1,10,50) //Top third lane line
  rect(350,rect1,10,50) //Top right lane line
 
  rect(50,rect2,10,50) //Second row first column lane line
  rect(150,rect2,10,50) //Second row second column lane line
  rect(250,rect2,10,50) //Second row third column lane line
  rect(350,rect2,10,50) //Second row fourth column lane line
  
  rect(50,rect3,10,50) //Third row first column lane line
  rect(150,rect3,10,50) //Third row second column lane line
  rect(250,rect3,10,50) //Third row third column lane line
  rect(350,rect3,10,50) //Third row fourth column lane line
  
  rect(50,rect4,10,50) //Fourth row first column lane Line
  rect(150,rect4,10,50) //Fourth row second column lane line
  rect(250,rect4,10,50) //Fourth row third column lane line
  rect(350,rect4,10,50) //Fourth row fourth column lane line
  
  rect(50,rect5,10,50) //Off screen bottom left lane line
  rect(150,rect5,10,50) //Off screen bottom second lane line
  rect(250,rect5,10,50) //Off screen bottom third lane line
  rect(350,rect5,10,50) //Off screen bottom right lane line
  
  fill('red') //Colors circles red
  
  circle(circlex0,circle0, circle0r) //Declares first lane circle
  circle(circlex1,circle1, circle1r) //Declares second lane circle
  circle(circlex2,circle2, circle2r) //Declares third lane circle
  circle(circlex3,circle3, circle3r) //Declares fourth lane circle
  circle(circlex4,circle4, circle4r) //Declares fifth lane circle
  
  fill('black') //Colors wheels black
  circle(mouseX+2, 315, 20) //Declares front left wheel
  circle(mouseX+2, 345, 20) //Declares back left wheel
  circle(mouseX+43, 315, 20) //Declares front right wheel
  circle(mouseX+43, 345, 20) //Declares back right wheel
  fill('white') //Colors headlights
  rect(mouseX+6, recty-9, 10, 10) //Declares left headlight
  rect(mouseX+29, recty-9, 10, 10) //Declares right headlight
  fill('red') //Colors backlights red
  rect(mouseX+6, recty+57, 10, 10) //Declares left back light
  rect(mouseX+29, recty+57, 10, 10) //Declares right back light
  fill('purple'); // Colors body of the car
  body = rect(mouseX, recty, rectr, recth); //Declares body of the car
  
  if (mouseX > -1){ //Makes the lane lines drop to give illusion that the car is moving foward
    rect0 = rect0 + 3.5
    rect1 = rect1 + 3.5
    rect2 = rect2 + 3.5
    rect3 = rect3 + 3.5
    rect4 = rect4 + 3.5
    rect5 = rect5 + 3.5
    score = score + 1 //Makes the score increase
  }
  if (rect1 > 99){ //Resets all the lane lines to original position to keep the illsuion going
    rect0 = -100
    rect1 = 0
    rect2 = 100
    rect3 = 200
    rect4 = 300
    rect5 = 400
  }
  
  if (mouseX > -1){ //Causes the circles/objects to drop 
    circle0 = circle0 + random(1,2)
    circle1 = circle1 + random(2.5,3.5)
    circle2 = circle2 + random(0.25,1)
    circle3 = circle3 + random(1.5,2.5)
    circle4 = circle4 + random(0.5,1.5)
    
  }
  
  if(circle0 > 400){ //Resets first circle back to top when it goes off screen
    circle0 = -50
  }
  if(circle1 > 400){//Resets second circle back to top when it goes off screen
    circle1 = -50
  }
  if(circle2 > 400){ //Restes third circle back to top when it goes off screen
    circle2 = -50
  }
  if(circle3 > 400){ //Resets fourth circle back to top when it goes off screen
    circle3 = -50
  }
  if(circle4 > 400){ //Resets fifth circle back to top when it goes off screen
    circle4 = -50
  }
  
  stroke('black') //Makes outline for the score black
  fill('blue') //Makes the score color blue
  textSize(30) //Determines size for the score
  text('Score:', 140 , 30) //Creates and position the word 'score'
  text(score, 230, 30) //Creates and positions the score
  
  if((circle0 > 275 && circle0 < 350) && (mouseX < 50 && mouseX > -10)){
    score = 0 //Resets score if first circle is 'hit'
  }
  
  if((circle1 > 275 && circle1 < 350) && (mouseX < 140 && mouseX > 30)){
     score = 0 //Resets score if second circle is 'hit'
     }
  if((circle2 > 275 && circle2 < 350) && (mouseX < 240 && mouseX > 130)){
     score = 0 //Resets score if third circle is 'hit'
     }
  if((circle3 > 275 && circle3 < 350) && (mouseX < 340 && mouseX > 230)){
     score = 0 //Resets score if fourth circle is 'hit'
     }
  if((circle4 > 275 && circle4 < 350) && (mouseX > 340)){
     score = 0 //Resets score if fifth circle is 'hit'
     }
  
}
 function back(){ //Makes the back button go to the home screen of the app
   window.open('https://editor.p5js.org/Michael_Carpenter/sketches/Ibh2ZZZVH')
 }


