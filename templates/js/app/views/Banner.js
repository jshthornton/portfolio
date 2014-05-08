define([
	'jquery',
	'underscore',
	'./_AppView',
	'bite'
], function($, _, _AppView, bite) {
	'use strict';

	return _AppView.extend({
		size: 'large',

		initialize: function() {
			_.bindAll(this);

			var _this = this,
				$navLinks = $('#site-nav li', this.$el);

			bite.register({
				type: 'element',
				$el: $('#statement'),
				point: {
					y: true
				},
				origin: {
					y: 150
				},
				toggle: true
			}, 
			this._onJumbotronExit,
			this._onJumbotronReturn);


			bite.register({
				type: 'element',
				$el: $('#statement'),
				point: {
					y: true
				},
				origin: {
					y: 50,
					unitY: '%'
				},
				toggle: true
			}, function() {
				$navLinks.removeClass('selected');
				$navLinks.eq(1).addClass('selected');
			}, function() {
				$navLinks.removeClass('selected');
				$navLinks.eq(0).addClass('selected');
			});

			bite.register({
				type: 'element',
				$el: $('#skills'),
				point: {
					y: true
				},
				origin: {
					y: 50,
					unitY: '%'
				},
				toggle: true
			}, function() {
				$navLinks.removeClass('selected');
				$navLinks.eq(2).addClass('selected');
			}, function() {
				$navLinks.removeClass('selected');
				$navLinks.eq(1).addClass('selected');
			});

			bite.register({
				type: 'element',
				$el: $('#contact'),
				point: {
					y: true
				},
				origin: {
					y: 50,
					unitY: '%'
				},
				toggle: true
			}, function() {
				$navLinks.removeClass('selected');
				$navLinks.eq(4).addClass('selected');
			}, function() {
				$navLinks.removeClass('selected');
				$navLinks.eq(2).addClass('selected');
			});

			bite.register({
				type: 'element',
				$el: $('#footer'),
				point: {
					y: true
				},
				origin: {
					y: 100,
					unitY: '%'
				},
				toggle: true
			}, function() {
				$navLinks.removeClass('selected');
				$navLinks.eq(4).addClass('selected');
			}, function() {
				$navLinks.removeClass('selected');
				$navLinks.eq(2).addClass('selected');
			});

		},

		render: function() {
			if(this.size === 'small') {
				this.$el.addClass('small');
			} else if(this.size === 'large') {
				this.$el.removeClass('small');
			}
		},

		events: {
			'sectionChange': '_onSectionChange'
		},

		_onJumbotronExit: function() {
			this.size = 'small';
			this.render();
		},

		_onJumbotronReturn: function() {
			this.size = 'large';
			this.render();
		}
	});
})