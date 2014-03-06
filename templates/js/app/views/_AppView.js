define([
	'jquery',
	'underscore',
	'Class',
], function($, _, Class) {
	'use strict';

	return Class.extend({
		el: null,
		$el: null,

		init: function(opts) {
			var el = opts.el;

			if(!el) {
				el = document.createElement('div');
			}
			this.setElement(opts.el);
		},

		setElement: function(el) {
			this.el = el;
			this.$el = $(el);
		},

		render: $.noop
	});
})