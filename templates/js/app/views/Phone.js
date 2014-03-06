define([
	'jquery',
	'underscore',
	'./_AppView',
], function($, _, _AppView) {
	'use strict';

	return _AppView.extend({
		index: 0,
		//itemWidth,
		//itemCount,
		//$items

		init: function() {
			this._super.apply(this, arguments);

			_.bindAll(this);

			this.$belt = $('.screen-belt', this.$el);
			this.$items = $('> li', this.$belt);
			this.itemWidth = this.$items.eq(0).width();
			this.itemCount = this.$items.length;

			this.$prev = $('.prev', this.$el);
			this.$next = $('.next', this.$el);

			this.$el
				.on('click', '.prev', this._onPrevClick)
				.on('click', '.next', this._onNextClick);

			this._buttonCheck();
		},

		move: function(oldIndex, newIndex) {
			var _this = this,
				margin = -(this.itemWidth * newIndex);

			/*this.$belt.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
			});*/

			this.$belt.css({
				'margin-left': margin
			});

			margin = null;
		},

		setIndex: function(index) {
			var changed = true;

			if(index < 0) {
				index = 0;
			} else if(index > this.itemCount - 1) {
				index = this.itemCount - 1;
			}

			if(this.index !== index) {
				this.move(this.index, index);
				this.index = index;
				this._buttonCheck();
			}
		},

		_buttonCheck: function() {
			var index = this.index;

			if(index === 0) {
				this.$prev.hide();
			} else {
				this.$prev.show();
			}

			if(index === this.itemCount - 1) {
				this.$next.hide();
			} else {
				this.$next.show();
			}
		},

		//Events
		_onPrevClick: function() {
			this.setIndex(this.index - 1);
		},

		_onNextClick: function() {
			this.setIndex(this.index + 1);
		}
	});
})