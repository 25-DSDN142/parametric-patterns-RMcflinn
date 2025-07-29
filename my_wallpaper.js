let OutsideEllipseWidth = 40;
let OutsideEllipseHeight = 70;
let insideFlowerWidth= 35;




function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH); // pWallpaper.output_mode(GRID_WALLPAPER);
  
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
 
  stroke(15);
  strokeWeight();
  fill(133, 70, 3, 130);
  for (let i= 1; i < 10; i += 1) { //variable is set to i, loop continues as long as i < 10, increases by 1
    ellipse(0, 0, 100, insideFlowerWidth);
    rotate(angle); //goes at end 
  }
  pop();//finished loop


//The Outside Flower
  push();
  translate (100, 100);

  smooth();
  strokeWeight();
  fill(200, 50);
  for (let i= 0; i < 7; i += 1) {
    ellipse(0, 0, OutsideEllipseHeight, OutsideEllipseWidth);
    rotate(angle);
  }
 pop();


//Outside Main Lines 
  push();
  translate (100, 100);

  stroke(255, 217, 112, 70);
  for (let i= 0; i < 8; i +=1) {
  line (100, 0, 0, 0);
  rotate(angle);
  }
  pop();


//The Lines Outline 
    push();
  translate (100, 100);

  smooth();
  strokeWeight();
  fill(200, 50);
  for (let i= 0; i < 7; i += 1) {
    ellipse(0, 0, 200, 5);
    rotate(angle);
  }
 pop();


  noFill();
  beginShape();

   vertex(29, 29);
    quadraticVertex(100, 100, 100, 0);
    quadraticVertex(100, 100, 171, 29);
    quadraticVertex(100, 100, 200, 100);
    quadraticVertex(100, 100, 171, 171);
    quadraticVertex(100, 100, 100, 200);
    quadraticVertex(100, 100, 29, 171);
    quadraticVertex(100, 100, 0, 100);
    quadraticVertex(100, 100, 29, 29);
   endShape();
  



















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
  









  

 







