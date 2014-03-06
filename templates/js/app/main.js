(function() {
	'use strict';
	
	require.config({
		baseUrl: '/js/app',

		paths: {
			'jquery': '../libs/jquery',
			'Class': '../libs/Class',
			'underscore': '../libs/lodash',
			'text': '../libs/text',
			'modernizr': '../libs/modernizr',
			'bite': '../libs/bite'
		},

		shim: {
			'Class': {
				deps: [],
				exports: 'Class'
			},

			modernizr: {
				deps: [],
				exports: 'modernizr'
			}
		}
	});

	require([
		'jquery',
		'underscore',
		'bite',
		'parser'
	], function($, _, bite, parser) {
		bite.init($, _);

		//Ready
		$(function() {
			parser.parse().then(function() {
				bite.start();
			});
		})
	});
}());