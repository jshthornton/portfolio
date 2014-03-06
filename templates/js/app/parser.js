define([
	'jquery',
	'underscore'
], function($, _) {
	var parser = {
		parse: function(opts) {
			var _opts = _.assign({
				rootNode: $(document.body)
			}, opts);

			var $nodes = $('[data-view]', _opts.rootNode),
				defer = $.Deferred(),
				len = $nodes.length,
				count = 0;

			$nodes.each(function(index) {
				var $node = $(this),
					mid = $node.data('view'),
					propsStr = $node.data('viewProps') || '',
					props = new Function('return { ' + propsStr + ' };')();
					props.el = this;

				require([mid], function(View){
					var v = new View(props);

					if(count === len - 1) defer.resolve();

					count++;
				});
			});

			if(len === 0) defer.resolve();

			return defer.promise();
		}
	};

	return parser;
});