var options = {

	fullscreen: true,
	legends: true,
	search: false,
	shareable: false,
	layer_selector: true,
	cartodb_logo: false
}


	window.onload = function() {
	  cartodb.createVis('map', 'http://pironus.carto.com/u/pironus/api/v2/viz/cea7c405-77ad-42f0-a401-432ba8e4c77f/viz.json', options)
	  ;
	}