(function() {
	'use strict';
	
	require.config({
		baseUrl: '/js/app',

		paths: {
			'jquery': '../libs/jquery',
			'Class': '../libs/Class',
			'underscore': '../libs/lodash',
			'backbone': '../libs/backbone',
			'text': '../libs/text',
			'modernizr': '../libs/modernizr',
			'bite': '../libs/bite',
			'buoy': '../libs/buoy'
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
		'views/Page'
	], function($, _, Page) {

		//Ready
		$(function() {
			var page = new Page({
				el: document.body
			});
		})
	});
}());