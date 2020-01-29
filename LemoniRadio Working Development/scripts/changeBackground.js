z = 1

function changeZone() {
    clearInterval(timerZone);

    switch(z) {
        case 1:
            var zoneText = "Energetic Zone";
            var x = "#fde146";
            var y = "#5eb546";
            var navBackgroundColor = "#5eb546";
            break;
        case 2:
            var zoneText = "Mellow Zone";
            var x = "#76cdd9";
            var y = "#d47097";
            var navBackgroundColor = "#76cdd9";
            break;
        case 3:
            var zoneText = "Twilight Zone";
            var x = "#be1e2d";
            var y = "#ec7323";
            var navBackgroundColor = "#be1e2d";
            break;
        case 4:
            var zoneText = "Deep Zone";
            var x = "#7f4098";
            var y = "#0e2539";
            var navBackgroundColor = "#7f4098";
            break;
    }

    document.getElementById("zoneText").innerText = zoneText;
    document.getElementById("navColor").style.backgroundColor = navBackgroundColor;
    
    var bgColor = "repeating-linear-gradient(" + "90deg" + "," + x + "," + y + ")";
    document.body.style.background = bgColor;

    z++;

    if (z > 4) { z = 1; }
}

function setbackground()
{

var date = new Date();
var hour = date.getHours();

// 6am - 12pm Energetic Zone
if (6 <= hour && hour < 12) {
    var zoneText = "Energetic Zone";
    var x = "#fde146";
    var y = "#5eb546";
    var navBackgroundColor = "#5eb546";
}
// 12pm - 6pm Mellow Zone
if (12 <= hour && hour < 18) {
    var zoneText = "Mellow Zone";
    var x = "#76cdd9";
    var y = "#d47097";
    var navBackgroundColor = "#76cdd9";
}
// 6pm - 12am Twilight Zone
if (18 <= hour && hour <= 23) {
    var zoneText = "Twilight Zone";
    var x = "#be1e2d";
    var y = "#ec7323";
    var navBackgroundColor = "#be1e2d";
}
// 12am - 6am Deep Zone
if (0 <= hour && hour < 12) {
    var zoneText = "Deep Zone";
    var x = "#7f4098";
    var y = "#0e2539";
    var navBackgroundColor = "#7f4098";
}

document.getElementById("zoneText").innerText = zoneText;
document.getElementById("navColor").style.backgroundColor = navBackgroundColor;

var bgColor = "repeating-linear-gradient(" + "90deg" + "," + x + "," + y + ")";
document.body.style.background = bgColor;


/* window.setTimeout( "setbackground()", 30000); // 600000 milliseconds delay is 10 min
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
// ColorValue = "0e2539"; //darkblue */


}

setbackground();
 
var timerZone = setInterval(setbackground, 1000);