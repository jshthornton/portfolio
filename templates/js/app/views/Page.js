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
				$padder = $('#padder');

			$padder.css({
				'margin-top': (windowHeight + 200) + 'px'
			});

			if(!Modernizr.csstransforms) {
				buoy.align({
					$el: $('> .intro-container', $jumbotron),
					$container: $jumbotron
				});
			}
		},

		//Events
		events: {
			'click a': '_onLinkClick'
		},

		_onRender: function() {
			this.resizeJumbotron();

			bite.start();
		},

		_onWindowResize: _.debounce(function() {
			this.resizeJumbotron();
		}, 100),

		_onLinkClick: function(e) {
			var node = e.currentTarget;

			if(location.host === node.host) {
				e.preventDefault();

				var href = node.href.replace(node.baseURI, '');
				if(href.length) {
					if(href[0] === '#' && href.length > 1) {
						var $marklet = $(href + '> .marklet'),
							top;

						if(href === '#jumbotron') {
							top = 0;
						} else {
							top = $marklet.offset().top;
						}

						$('html, body').animate({
							scrollTop: top
						}, 800);
					} else {

					}
				}
			}
		}
	});
})