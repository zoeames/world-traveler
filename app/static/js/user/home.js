/*global google:true*/

(function(){
  'use strict';

  var map;

  $(document).ready(function(){
    initMap(36.1667, -86.7833, 10);
  });

  function initMap(lat, lng, zoom){
    var styles = [{'featureType':'road','elementType':'geometry','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','stylers':[{'hue':149},{'saturation':-78},{'lightness':0}]},{'featureType':'road.highway','stylers':[{'hue':-31},{'saturation':-40},{'lightness':2.8}]},{'featureType':'poi','elementType':'label','stylers':[{'visibility':'off'}]},{'featureType':'landscape','stylers':[{'hue':163},{'saturation':-26},{'lightness':-1.1}]},{'featureType':'transit','stylers':[{'visibility':'off'}]},{'featureType':'water','stylers':[{'hue':3},{'saturation':-24.24},{'lightness':-38.57}]}],
        mapOptions = {center: new google.maps.LatLng(lat, lng), zoom: zoom, mapTypeId: google.maps.MapTypeId.ROADMAP, styles:styles};
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
})();

