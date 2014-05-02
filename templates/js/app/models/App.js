define([
	'underscore',
	'./_AppModel',
], function(_, _AppModel) {
	'use strict';

	return _AppModel.extend({
		defaults: function() {
			return {
				size: 'desktop'
			};
		}
	});
})