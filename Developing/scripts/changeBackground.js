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
            var logo = "LOGO-energetic-zone.svg";
            var playercolor = "repeating-linear-gradient(" + "90deg" + "," + x + "," + y + ")";
            var sponsor_img = sponsor_imgs[0];
            var nav_link = "#fde146";
            break;
        case 2:
            var zoneClass = "mellow";
            var zoneText = "Mellow Zone";
            var x = "#76cdd9";
            var y = "#d47097";
            var textColor1 = "#d47097";
            var textColor2 = "#76cdd9";
            var navBackgroundColor = "#76cdd9";
            var logo = "LOGO-Mellow-zone.svg";
            var playercolor = "repeating-linear-gradient(" + "90deg" + "," + x + "," + y + ")";
            var sponsor_img = sponsor_imgs[1];
            var nav_link = "#d47097";
            break;
        case 3:
            var zoneClass = "twilight";
            var zoneText = "Twilight Zone";
            var x = "#be1e2d";
            var y = "#ec7323";
            var textColor1 = "#ec7323";
            var textColor2 = "#be1e2d";
            var navBackgroundColor = "#be1e2d";
            var logo = "LOGO-Twilight-zone.svg";
            var playercolor = "repeating-linear-gradient(" + "90deg" + "," + x + "," + y + ")";
            var sponsor_img = sponsor_imgs[2];
            var nav_link = "#ec7323";           
            break;
        case 4:
            var zoneClass = "deep";
            var zoneText = "Deep Zone";
            var x = "#7f4098";
            var y = "#0e2539";
            var textColor1 = "#0e2539";
            var textColor2 = "#7f4098";
            var navBackgroundColor = "#7f4098";
            var logo = "LOGO-deep-zone.svg";
            var sponsor_img = sponsor_imgs[3];
            var nav_link = "#0e2539";
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
    document.getElementsByClassName("nav-color-script").style.color = nav_link;
    
    var bgColor = "repeating-linear-gradient(" + "90deg" + "," + x + "," + y + ")";
    document.body.style.background = bgColor;

    var playercolor = "repeating-linear-gradient(" + "0deg" + "," + x + "," + y + ")";
    document.getElementById("playerBox").style.background = playercolor;


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
    var textColor1 = "#5bb646";
    var textColor2 = "#fde146";
    var navBackgroundColor = "#5bb646";
    var logo = "LOGO-energetic-zone.svg";
    var playercolor = "#5eb546"
    var sponsor_img = sponsor_imgs[0];
    var navLinkColor = "#fbe246";
    var chatTitleColor = "#fbe246";
}
// 12pm - 6pm Mellow Zone  
if (12 <= hour && hour < 18) {
    var zoneClass = "mellow";
    var zoneText = "Mellow Zone";
    var x = "#76cdd9";
    var y = "#d47097";
    var textColor1 = "#d46f97";
    var textColor2 = "#76cdd9";
    var navBackgroundColor = "#d46f97";
    var logo = "LOGO-Mellow-zone.svg";
    var playercolor = "#d47097"
    var sponsor_img = sponsor_imgs[1];
    var navLinkColor = "#77ced9";
    var chatTitleColor = "#77ced9";
    
   
}
// 6pm - 12am Twilight Zone 
if (18 <= hour && hour <= 23) {
    var zoneClass = "twilight";
    var zoneText = "Twilight Zone";
    var x = "#be1e2d";
    var y = "#ec7323";
    var textColor1 = "#ee7423";
    var textColor2 = "#be1e2d";
    var navBackgroundColor = "#ee7423";
    var logo = "LOGO-Twilight-zone.svg";
    var playercolor = "#ec7323"
    var sponsor_img = sponsor_imgs[2];
    var navLinkColor = "#bf1e2e";
    var chatTitleColor = "#bf1e2e";


}
// 12am - 6am Deep Zone
if (0 <= hour && hour < 6) {
    var zoneClass = "deep";
    var zoneText = "Deep Zone";
    var x = "#7f4098";
    var y = "#0e2539";
    var textColor1 = "#2c2869";
    var textColor2 = "#7f4098";
    var navBackgroundColor = "#7f3f98";
    var logo = "LOGO-deep-zone.svg";
    var sponsor_img = sponsor_imgs[3];
    var navLinkColor = "#2c2869";
    var chatTitleColor = "#7f3f98";
}


document.getElementById("content").setAttribute("class", zoneClass);
document.getElementById("zoneText").innerText = zoneText;
document.getElementById("navColor").style.backgroundColor = navBackgroundColor;
//document.getElementById("timeBox").style.backgroundColor = navBackgroundColor;
document.getElementById("timeBox").style.color = textColor1;
document.getElementById("social-media").style.color = textColor2;
document.getElementById("logo_image").src = logo;
//document.getElementById("playerBox").style.backgroundColor = playercolor;
document.getElementById("sponsor_img_zone").src = sponsor_img;
document.getElementsByClassName("nav-color-script")[0].style.color = navLinkColor;
document.getElementsByClassName("nav-color-script")[1].style.color = navLinkColor;
document.getElementsByClassName("nav-color-script")[2].style.color = navLinkColor;
//document.getElementById("playerBox").style.color = textColor1;
document.getElementsByClassName("scriptColor")[0].style.color = textColor1;
document.getElementsByClassName("scriptColor")[1].style.color = textColor1;
document.getElementsByClassName("scriptColor")[2].style.color = textColor1;
document.getElementsByClassName("scriptColor")[3].style.color = textColor1;
document.getElementsByClassName("scriptColor")[4].style.color = textColor1;
document.getElementsByClassName("scriptColor")[5].style.color = textColor1;
document.getElementsByClassName("scriptColor")[6].style.color = textColor1;
document.getElementsByClassName("scriptColor")[7].style.color = textColor1;
document.getElementById("chatText").style.color = chatTitleColor;
var bgColor = "repeating-linear-gradient(" + "90deg" + "," + x + "," + y + ")";
document.body.style.background = bgColor;

var playercolor = "repeating-linear-gradient(" + "90deg" + "," + x + "," + y + ")";
//document.getElementById("playerBox").style.background = playercolor;


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