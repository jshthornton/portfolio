define([
	'jquery',
	'underscore',
	'./_AppView',
	'models/App',
	'bite',
	'buoy',
	'parser'
], function($, _, _AppView, App, bite, buoy, parser) {
	'use strict';

	return _AppView.extend({

		initialize: function() {
			_.bindAll(this);

			this.render().then(this._onRender);

			$(window).on('resize', this._onWindowResize);
		},

		render: function() {
			return parser.parse();
		},

		resizeJumbotron: function() {
			var windowHeight = $(window).height(),
				$jumbotron = $('#jumbotron'),
				$padder = $('#padder');

			$jumbotron.height(windowHeight);
			$padder.css({
				'margin-top': (windowHeight + 200) + 'px'
			});

			buoy.align({
				$el: $('> .intro-container', $jumbotron),
				$container: $jumbotron
			});
		},

		//Events
		_onRender: function() {
			this.resizeJumbotron();

			bite.start();
		},

		_onWindowResize: _.debounce(function() {
			this.resizeJumbotron();
		}, 100)
	});
})