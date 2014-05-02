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
			_.bind(this._onJumbotronExit, this),
			_.bind(this._onJumbotronReturn, this));

		},

		render: function() {
			if(this.size === 'small') {
				this.$el.addClass('small');
			} else if(this.size === 'large') {
				this.$el.removeClass('small');
			}
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