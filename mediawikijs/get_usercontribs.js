// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_usercontribs.js

	MediaWiki API Demos
	Demo of `Usercontribs` module: List user contributions.

	MIT License
*/

var params = {
		action: 'query',
		format: 'json',
		list: 'usercontribs',
		ucuser: 'Jimbo Wales'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var usercontrib = data.query.usercontribs,
		uc;
	for ( uc in usercontrib ) {
		console.log( usercontrib[ uc ].title );
	}
} );
