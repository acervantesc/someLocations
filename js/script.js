var map = L.map('map').setView([40.718829,-73.969419], 13);

L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

 

var prattIcon = L.icon({
    iconUrl: 'img/school.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var homeIcon = L.icon({
    iconUrl: 'img/home.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var officeIcon = L.icon({
    iconUrl: 'img/office.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [32, 37], // size of the icon
    //shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


//Locations

//office
var officeMarker = L.marker([40.758189,-73.981983], {icon: officeIcon}).addTo(map);
//marker.bindPopup("<b>WSJ</b><br>I work here")

//pratt
var prattMarker = L.marker([40.691158,-73.963100], {icon: prattIcon}).addTo(map);
	//marker.bindPopup("<b>Pratt!</b><br>I come here every week.")

//home
var homeMarker = L.marker([40.686887,-73.949153], {icon: homeIcon}).addTo(map);
//marker.bindPopup("<b>300 Quincy!</b><br>I live here.")

//Hours spend

var circle = L.circle([40.758189,-73.981983],800,{
    color: 'rgba(255, 0, 0, 0.5)',
    stroke: 0,
    fillCollor: '#f03',
    fillOpacity: 0.5
}).bindPopup("Office 42.5 Hours").addTo(map);


var circle = L.circle([40.686887,-73.949153],1600,{
    color: 'rgba(52, 131, 184, 0.6)',
    stroke: 0,
    fillCollor: '#f03',
    fillOpacity: 0.5
    
}).bindPopup("Home 64.5 Hours").addTo(map);

var circle = L.circle([40.691430,-73.963705],300,{
    color: ' rgba(167, 255, 163, 0.9)',
    stroke: 0,
    fillCollor: '#f03',
    fillOpacity: 0.5
    
}).bindPopup("Pratt 8 Hours").addTo(map);




//listeners for sidebar hovers

officeMarker.on('mouseover',function(){
	$('.location').toggleClass('hover');
})

prattMarker.on('mouseover',function(){
	$('.location').toggleClass('hover');
})

homeMarker.on('mouseover',function(){
	$('.location').toggleClass('hover');
})





//recenter the map on click

$('.office').on('click',function(){
	map.panTo(new L.LatLng(40.758189,-73.981983),{animate: true, duration: 1.0});
	$('#image').css('background-image',"url('img/midtown.gif')");
	
});

$('.pratt').on('click',function(){
	map.panTo(new L.LatLng(40.691158,-73.963100),{animate: true, duration: 1.0});
	$('#image').css('background-image',"url('img/pratt.gif')");
	
});

$('.home').on('click',function(){
	map.panTo(new L.LatLng(40.686887,-73.949153),{animate: true, duration: 1.0});
	$('#image').css('background-image',"url('img/bed.gif')");
	
});




//box hover

$('.location').hover(function(){
	$(this).toggleClass('hover');
},function(){
	$(this).toggleClass('hover');
});
