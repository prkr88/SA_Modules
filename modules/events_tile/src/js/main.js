//Main js file for module

var loadTiles = function(){
	$("#nswTile").hide().delay(300).fadeIn("slow");
	$("#saTile").hide().delay(500).fadeIn("slow");
	$("#waTile").hide().delay(700).fadeIn("slow");
	$("#tasTile").hide();
	$("#showMore").hide().delay(1200).fadeIn("slow");
};

$(document).ready(function(){
	//run functions on load
	loadTiles();
	$("#reload").click(function(){
		loadTiles();
	});
	$("#showMore").click(function(){
		$('#tasTile').delay(200).fadeIn("slow");
	});
});

$(window).resize(function(){
	//run functions on resize

});
