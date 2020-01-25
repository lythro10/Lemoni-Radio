// Description: Randomly change background color every 10 seconds


function setbackground()
{
window.setTimeout( "setbackground()", 30000); // 600000 milliseconds delay is 10 min
var index = Math.round(Math.random() * 7);
var ColorValue = "5eb546"; // default color - green (index = 0)
if(index == 1)
ColorValue = changeMoodOrange(); //yellow
if(index == 2)
ColorValue = changeMoodBlue(); //orange
// if(index == 3)
// ColorValue = "be1e2d"; //red
// if(index == 4)
// ColorValue = "d47097"; //light purple
// if(index == 5)
//  ColorValue = "76cdd9"; //blueish
// if(index == 6)
// ColorValue = "7f4098"; //purple
// if(index == 7)
// ColorValue = "0e2539"; //darkblue


}
 