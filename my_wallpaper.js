let WhiteEllipseWidth = 90;
let WhiteEllipseHeight = 30;
let GoldFlowerWidth= 30;
let GoldFlowerHeight = 100;
  let crescentWidth = 20; //these variables change width of arc
  let crescentWidth2 = 40; // sent to other cresenct 




function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50; //Grid settings
}




function wallpaper_background() {
  background(29, 26, 117); 
}

// The Inside Flower 
function my_symbol() { 
  angleMode(DEGREES);
  let angle = 360/ 8;  //how many petals/rotations of 360
  push(); //this is where it starts looping
  translate (100, 100);//placement
  noStroke();
  fill(133, 70, 3, 130);
  for (let i= 1; i < 10; i += 1) { //variable is set to i, loop continues as long as i < 10, increases by 1
    ellipse(0, 0, GoldFlowerHeight, GoldFlowerWidth);
    rotate(angle); //goes at end 
  }
  pop();//finished loop



//The White Flower
  push();
  translate (100, 100);
  noStroke();
  fill(200, 50);
  for (let i= 0; i < 7; i += 1) {
    ellipse(0, 0, WhiteEllipseHeight, WhiteEllipseWidth);
    rotate(angle);
  }
  pop();



//The InsyTinsyFlower
  push();
  translate (100, 100);
  noStroke();
  fill(156, 82, 25, 75);
  for (let i= 1; i < 5; i += 1) {
    ellipse(0, 0, 20, 10);
    rotate(angle);
  }
  pop();



  
   


// Tall Star Lines
  angleMode(DEGREES);
  let angle2 = 360/ 4; 
  push();
  translate (100, 100);
  noStroke();
  fill(255, 217, 112, 70);
  smooth();
  for (let i= 1; i < 3; i += 1) {
    ellipse(0, 0, 150, 7);
    rotate(angle2);
  }
  pop();


 // The Short Star Lines
  angleMode(DEGREES);
  let angle3 = 360/ 8; 
  push();
  translate (100, 100);
  noStroke();
  fill(255, 217, 112, 70);
  smooth();
  for (let i= 4; i < 8; i += 1) {
    ellipse(0, 0, 100, 7);
    rotate(angle3);
  }
  pop();


  //The Outside Thick Lines 
  //push();
  //translate(100, 100);  // Consistent with others
  //noStroke();
  //fill(245, 155, 66, 100);
  //for (let i = 0; i < 6; i++) {
    //ellipse(90, 0, 5, 150);
    //rotate(60);  // 360/6 = 60 degrees
  //}
  //pop();  


 //Lines moving outwards 
  angleMode(DEGREES);
  let angle4 = 360/16 ; 
  push();
  translate (100, 100);

  stroke(255, 217, 112, 70);
  for (let i= 0; i < 16; i +=1) {
  line (100, 0, 0, 0);
  rotate(angle4);
  }
  pop();


//Foreground Clouds
  fill(255, 217, 112, 80);
  noStroke();
  ellipse(60, 50, 30, 30);
  ellipse(50, 60, 30, 30);
  ellipse(50, 50, 30, 30);
  ellipse(30, 60, 30, 25);
  ellipse(25, 70, 20, 15);
  ellipse(40, 60, 35, 25);



  //Inside SpiderMan Sun 
  beginShape();
  noFill();
   vertex(29, 29);
   strokeWeight(8);
   stroke(255, 217, 112, 70);
    quadraticVertex(100, 100, 100, 0);
    quadraticVertex(100, 100, 171, 29);
    quadraticVertex(100, 100, 200, 100);
    quadraticVertex(100, 100, 171, 171);
    quadraticVertex(100, 100, 100, 200);
    quadraticVertex(100, 100, 29, 171);
    quadraticVertex(100, 100, 0, 100);
    quadraticVertex(100, 100, 29, 29);
  endShape();
  //Outside SpiderMan Sun
    beginShape();
  noFill();
   vertex(100, 0);
   strokeWeight(3);
   stroke(255, 217, 112, 70);
    quadraticVertex(110, 45, 139, 7); //1
    quadraticVertex(130, 50, 170, 30);  //2
    quadraticVertex(145, 65, 190, 62);  //3
    quadraticVertex(160, 85, 200, 100);  //4
    quadraticVertex(145, 110, 193, 138); //5
    quadraticVertex(140, 130, 170, 170); //6
    quadraticVertex(130, 145, 139, 193); //7
    quadraticVertex(110, 150, 100, 200);  //8
    quadraticVertex(90, 150, 61, 193); //1
    quadraticVertex(70, 145, 30, 170); //2
    quadraticVertex(50, 130, 7, 139); //3
    quadraticVertex(40, 110, 0, 100); //4
    quadraticVertex(40, 85, 7, 61); //6
    quadraticVertex(35, 65, 30, 30); //7
    quadraticVertex(70, 55, 61, 7); //8
    quadraticVertex(90, 45, 100, 0); //9   
  endShape();

//BackGround Clouds
  fill(255, 217, 112, 80);
  noStroke();
  ellipse(5, 190, 70, 60);
  ellipse(0, 200, 100, 55);
  ellipse(15, 15, 30, 25);
  ellipse(2, 5, 70, 25);
  ellipse(185, 5, 60, 40);
  ellipse(10, 195, 50, 30);

 


















  //smooth();
  //noStroke();
  //fill(255, 217, 112, 70);
  //ellipse(100, 100, 100, 10)
  //ellipse(100, 100, 10, 163);
  //ellipse(100, 100, 20, 100);
  //ellipse(100, 100, 75, 20);

  

  






























//The Lines Outline 
    //push();
  //translate (100, 100);

  //smooth();
  //strokeWeight();
  //fill(200, 50);
  //for (let i= 0; i < 7; i += 1) {
    //ellipse(0, 0, 200, 5);
    //rotate(angle);
  //}
 //pop();

 
  
  //beginShape();
  //noFill();
   //vertex(29, 29);
   //stroke(255, 217, 112, 70);
    //quadraticVertex(100, 100, 100, 0);
    //quadraticVertex(100, 100, 171, 29);
    //quadraticVertex(100, 100, 200, 100);
    //quadraticVertex(100, 100, 171, 171);
    //quadraticVertex(100, 100, 100, 200);
    //quadraticVertex(100, 100, 29, 171);
    //quadraticVertex(100, 100, 0, 100);
    //quadraticVertex(100, 100, 29, 29);
  //endShape();


  //ellipseMode(CORNER);
  //fill(245, 156, 142, 50);
  //noFill();
  //ellipse(0, 0, 20, 20);
  //ellipse(180, 180, 20, 20);
  //ellipse(0, 180, 20, 20);
  //ellipse(180, 0, 20, 20);


  //ellipseMode(CENTER);
  //fill(255, 217, 112, 70);
  //noFill();
  //ellipse(100, 100, 200, 200);
  //ellipse(100, 100, 150, 150);  
  //ellipse(100, 100, 90, 90);

  //ellipse(127, 30, 10);
  //ellipse(30, 127, 10);
  //ellipse(170, 127, 10);
  //ellipse(127, 170, 10);  
  //ellipse(170, 73, 10);
  //ellipse(73, 170, 10);
  //ellipse(30, 73, 10);
  //ellipse(73, 30, 10);
    
  //ellipse(30, 30, 10);
  //ellipse(170, 30, 10);
  //ellipse(30, 170, 10);
  //ellipse(170, 170, 10);










    


  
  



















  //stroke(2);
  //fill(1);
  //central ellipse
  //ellipse(100, 100, 5, 5);

  //ellipseMode(CORNER);
  //noFill();
  //strokeWeight(0.25);
  //stroke(200);
  //ellipse(20, 20, 40, 40);

  //ellipseMode(CORNER);
  //noFill();
  //strokeWeight(0.25);
  //stroke(200);
  //ellipse(145, 145, 20, 20);







}
  









  

 







