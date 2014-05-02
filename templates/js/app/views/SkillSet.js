define([
	'jquery',
	'underscore',
	'./_AppView',
	'Class',
	'bite'
], function($, _, _AppView, Class, bite) {
	'use strict';

	var Skill = Class.extend({
		init: function($node) {
			_.bindAll(this);

			this.speed = 60;
			this.$node = $node;
			this.$icon = $('.icon', this.$node);
			this.$xp = $('.xp', this.$node);
			this.cap = this.$node.data('xp');
		},

		fill: function() {
			for(var i = 1; i <= this.cap; i++) {
				(_.bind(function(){
					var _i = i;

					setTimeout(_.bind(function() {
						this.levelUp(_i);
					}, this), this.speed * _i);
				}, this)());
			}
		},

		levelUp: function(level) {
			this.$xp.css('background-position', '0 ' + -(level * 140) + 'px');
		}
	});

	return _AppView.extend({
		skills: [],

		initialize: function(opts) {
			bite.register({
				type: 'element',
				$el: this.$el,
				point: {
					y: true
				},
				origin: {
					y: 50,
					unitY: '%'
				},
				once: true
			}, _.bind(this.onBite, this));

			_.each($('.icons li', this.$el), function(node, index) {
				this.skills.push(
					new Skill($(node))
				);
			}, this);
		},

		onBite: function() {
			_.each(this.skills, function(skill, index) {
				skill.fill();
			}, this);
		}
	});
})