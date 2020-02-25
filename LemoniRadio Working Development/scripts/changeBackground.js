function preloadImage(url) {
    var img=new Image();
    img.src=url;
}

sponsor_imgs = [
    "sponsor-banners-energetic-zone.png",
    "sponsor-banners-mellow-zone.png",
    "sponsor-banners-twilight-zone.png",
    "sponsor-banners-deep-zone.png"
]

for (var sponsor_img of sponsor_imgs) {
    preloadImage(sponsor_img);
}

z = 1

function changeZone() {
    clearInterval(timerZone);
// changed colors between twilight and mellow but the images are the same
    switch(z) {
        case 1:
            var zoneClass = "energetic";
            var zoneText = "Energetic Zone";
            var x = "#fde146";
            var y = "#5eb546";
            var textColor1 = "#fde146";
            var textColor2 = "#fde146";
            var navBackgroundColor = "#5eb546";
            var logo = "LOGO-energetic-zone.png";
            var sponsor_img = sponsor_imgs[0];
            break;
        case 2:
            var zoneClass = "mellow";
            var zoneText = "Mellow Zone";
            var x = "#76cdd9";
            var y = "#d47097";
            var textColor1 = "#d47097";
            var textColor2 = "#76cdd9";
            var navBackgroundColor = "#76cdd9";
            var logo = "LOGO-Mellow-zone.png";
            var sponsor_img = sponsor_imgs[1];
            break;
        case 3:
            var zoneClass = "twilight";
            var zoneText = "Twilight Zone";
            var x = "#be1e2d";
            var y = "#ec7323";
            var textColor1 = "#ec7323";
            var textColor2 = "#be1e2d";
            var navBackgroundColor = "#be1e2d";
            var logo = "LOGO-Twilight-zone.png";
            var sponsor_img = sponsor_imgs[2];           
            break;
        case 4:
            var zoneClass = "deep";
            var zoneText = "Deep Zone";
            var x = "#7f4098";
            var y = "#0e2539";
            var textColor1 = "#0e2539";
            var textColor2 = "#7f4098";
            var navBackgroundColor = "#7f4098";
            var logo = "LOGO-deep-zone.png";
            var sponsor_img = sponsor_imgs[3];
            break;
    }

    document.getElementById("content").setAttribute("class", zoneClass);
    document.getElementById("zoneText").innerText = zoneText;
    document.getElementById("navColor").style.backgroundColor = navBackgroundColor;
    document.getElementById("timeBox").style.backgroundColor = navBackgroundColor;
    document.getElementById("timeBox").style.color = textColor1;
    document.getElementById("social-media").style.color = textColor2;
    document.getElementById("logo_image").src = logo;
    document.getElementById("sponsor_img_zone").src = sponsor_img;
    
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
    var zoneClass = "energetic";
    var zoneText = "Energetic Zone";
    var x = "#fde146";
    var y = "#5eb546";
    var textColor1 = "#fde146";
    var textColor2 = "#fde146";
    var navBackgroundColor = "#5eb546";
    var logo = "LOGO-energetic-zone.png";
    var sponsor_img = sponsor_imgs[0];
}
// 12pm - 6pm Mellow Zone  
if (12 <= hour && hour < 18) {
    var zoneClass = "mellow";
    var zoneText = "Mellow Zone";
    var x = "#76cdd9";
    var y = "#d47097";
    var textColor1 = "#d47097";
    var textColor2 = "#76cdd9";
    var navBackgroundColor = "#76cdd9";
    var logo = "LOGO-Mellow-zone.png";
    var sponsor_img = sponsor_imgs[1];
    //old
    // var zoneClass = "twilight";
    // var zoneText = "Twilight Zone";
    // var x = "#be1e2d";
    // var y = "#ec7323";
    // var textColor1 = "#ec7323";
    // var textColor2 = "#be1e2d";
    // var navBackgroundColor = "#be1e2d";
    // var logo = "LOGO-Twilight-zone.png";
    // var sponsor_img = sponsor_imgs[1];
}
// 6pm - 12am Twilight Zone 
if (18 <= hour && hour <= 23) {
    var zoneClass = "twilight";
    var zoneText = "Twilight Zone";
    var x = "#be1e2d";
    var y = "#ec7323";
    var textColor1 = "#ec7323";
    var textColor2 = "#be1e2d";
    var navBackgroundColor = "#be1e2d";
    var logo = "LOGO-Twilight-zone.png";
    var sponsor_img = sponsor_imgs[2];
// old
    // var zoneClass = "mellow";
    // var zoneText = "Mellow Zone";
    // var x = "#76cdd9";
    // var y = "#d47097";
    // var textColor1 = "#d47097";
    // var textColor2 = "#76cdd9";
    // var navBackgroundColor = "#76cdd9";
    // var logo = "LOGO-Mellow-zone.png";
    // var sponsor_img = sponsor_imgs[2];
}
// 12am - 6am Deep Zone
if (0 <= hour && hour < 6) {
    var zoneClass = "deep";
    var zoneText = "Deep Zone";
    var x = "#7f4098";
    var y = "#0e2539";
    var textColor1 = "#0e2539";
    var textColor2 = "#7f4098";
    var navBackgroundColor = "#7f4098";
    var logo = "LOGO-deep-zone.png";
    var sponsor_img = sponsor_imgs[3];
}
// Old Times if need to go back
// // 6am - 12pm Energetic Zone
// if (6 <= hour && hour < 12) {
//     var zoneClass = "energetic";
//     var zoneText = "Energetic Zone";
//     var x = "#fde146";
//     var y = "#5eb546";
//     var textColor1 = "#fde146";
//     var textColor2 = "#fde146";
//     var navBackgroundColor = "#5eb546";
//     var logo = "LOGO-energetic-zone.png";
//     var sponsor_img = sponsor_imgs[0];
// }
// // 12pm - 6pm Mellow Zone  
// if (12 <= hour && hour < 18) {
//     var zoneClass = "twilight";
//     var zoneText = "Twilight Zone";
//     var x = "#be1e2d";
//     var y = "#ec7323";
//     var textColor1 = "#ec7323";
//     var textColor2 = "#be1e2d";
//     var navBackgroundColor = "#be1e2d";
//     var logo = "LOGO-Twilight-zone.png";
//     var sponsor_img = sponsor_imgs[1];
// }
// // 6pm - 12am Twilight Zone 
// if (18 <= hour && hour <= 23) {
//     var zoneClass = "mellow";
//     var zoneText = "Mellow Zone";
//     var x = "#76cdd9";
//     var y = "#d47097";
//     var textColor1 = "#d47097";
//     var textColor2 = "#76cdd9";
//     var navBackgroundColor = "#76cdd9";
//     var logo = "LOGO-Mellow-zone.png";
//     var sponsor_img = sponsor_imgs[2];
// }
// // 12am - 6am Deep Zone
// if (0 <= hour && hour < 6) {
//     var zoneClass = "deep";
//     var zoneText = "Deep Zone";
//     var x = "#7f4098";
//     var y = "#0e2539";
//     var textColor1 = "#0e2539";
//     var textColor2 = "#7f4098";
//     var navBackgroundColor = "#7f4098";
//     var logo = "LOGO-deep-zone.png";
//     var sponsor_img = sponsor_imgs[3];
// }

document.getElementById("content").setAttribute("class", zoneClass);
document.getElementById("zoneText").innerText = zoneText;
document.getElementById("navColor").style.backgroundColor = navBackgroundColor;
document.getElementById("timeBox").style.backgroundColor = navBackgroundColor;
document.getElementById("timeBox").style.color = textColor1;
document.getElementById("social-media").style.color = textColor2;
document.getElementById("logo_image").src = logo;
document.getElementById("sponsor_img_zone").src = sponsor_img;

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