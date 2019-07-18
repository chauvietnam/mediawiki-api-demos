// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_allimages_by_date.js

	MediaWiki API Demos
	List all images in the namespace, starting from January 1, 2010, at 18:05:46 UTC.

	MIT License
*/

var params = {
		action: 'query',
		format: 'json',
		list: 'allimages',
		aisort: 'timestamp',
		aistart: '2010-01-01T18:05:46Z'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var images = data.query.allimages,
		img;
	for ( img in images ) {
		console.log( images[ img ].title );
	}
} );