//your parameter variables go here!
let mainEllipseWidth = 20;
let mainEllipseHeight = 50;
let smallEllipseWidth= 10;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  // pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(100); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  angleMode(DEGREES);

  // calc the angle to rotate
  let angle = 360 / 12;
  //move the origin to the centre  
  push();
  translate (100, 100);
  //style flower
  stroke(1);
  fill(138, 67, 21);
  //draw flower 
  for (let i= 0; i < 10; i += 1) {
    ellipse(0, 0, 100, smallEllipseWidth);
    rotate(angle);
  }
  pop();




  push();
  translate (100, 100);

  stroke(1);
  fill(255, 50);
  ellipse(0, 0, mainEllipseWidth, mainEllipseHeight);
  rotate(angle);
  ellipse(0, 0, mainEllipseWidth, mainEllipseHeight);
  rotate(angle);
  ellipse(0, 0, mainEllipseWidth, mainEllipseHeight);
  rotate(angle);
  ellipse(0, 0, mainEllipseWidth, mainEllipseHeight);
  rotate(angle);
  ellipse(0, 0, mainEllipseWidth, mainEllipseHeight);
  rotate(angle);
  ellipse(0, 0, mainEllipseWidth, mainEllipseHeight);
  rotate(angle);
  ellipse(0, 0, mainEllipseWidth, mainEllipseHeight);
  rotate(angle);
  // fill(255, 50);

  // for (let i= 0; i < 7; i += 1) {
  // ellipse(0, 0, 80, 50);
  // rotate(angle);
  // }
 pop();


  stroke(2);
  fill(1);
  //central ellipse
  ellipse(100, 100, 5, 5);




  stroke(1);
  fill(1);
  point()

 

}

function dots() {
noStroke();


}
