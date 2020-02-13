type="text/javascript" src="https://www.radiojar.com/wrappers/api-plugins/v1/radiojar-min.js">

 rjq('#rjp-radiojar-player').radiojar('player', {
  "streamName": "mw1xsf0dpnruv",
  "enableUpdates": true,
  "defaultImage": "https://www.radiojar.com/img/sample_images/Radio_Stations_Avatar_BLUE.png",
  "autoplay":true
 });
 rjq('#rjp-radiojar-player').off('rj-track-load-event');
 rjq('#rjp-radiojar-player').on('rj-track-load-event', function(event, data) {
   updateInfo(data);
   if (data.title != "" || data.artist != "") {
     rjq('.rjp-trackinfo-container').show();
     rjq('#trackInfo').html(data.artist + ' - "' + data.title + '"')
   } else {
     rjq('.rjp-trackinfo-container').hide();
   }
 });

 function updateInfo(data) {
   if (data.thumb) {
     rjq('#rj-cover').html('<a href="#"><img src="' + data.thumb + '" alt="" title="" /></a>')
   } else {
     rjq('#rj-cover').html('')
   }
 }
