define([
	'jquery',
	'underscore',
	'./_AppView',
	'models/App',
	'bite',
	'parser'
], function($, _, _AppView, App, bite, parser) {
	'use strict';

	return _AppView.extend({

		initialize: function() {
			_.bindAll(this);

			this.render().then(this._onRender);
		},

		render: function() {
			return parser.parse();
		},

		_onRender: function() {
			var windowHeight = $(window).height(),
				$jumbotron = $('#jumbotron'),
				$padder = $('#padder');

			$jumbotron.height(windowHeight);
			$padder.css({
				'margin-top': windowHeight + 'px'
			});

			bite.start();
		}
	});
})