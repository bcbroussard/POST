(function($){
	$.widget('spark.appframe', {
		options: {
			template: 'view/frame.ejs'
		},
		_create: function(){
			this._createNav();
			this._panelSnap();
		},
		_createNav: function(){
			var data = {
				items:[ "design-is", "influences", "power-of-design", "our-philosophy", "our-process", "work-together" ]
			};
			var frame = new EJS({url: this.options.template }).render(data);
			$(this.element).append(frame);
		},
		_panelSnap: function(){
			var self = this;
			$('.pages').panelSnap({
				$menu: $('.circle-container'),
				panelSelector: ".page",
				slideSpeed: 500,
				keyboardNavigation: {
					enabled: true, 
					nextPanelKey: 40,
					previousPanelKey: 38,
					wrapAround: false
				},
				onSnapFinish: function($target){
					self._changePage($target);
				}
			});

	        // smoothScroll.init({
	        //     speed: 1000,
	        //     easing: 'easeInOutCubic',
	        //     offset: 0,
	        //     updateURL: true,
	        //     callbackBefore: function ( toggle, anchor ) {},
	        //     callbackAfter: function ( toggle, anchor ) {}
	        // });
		},
		_changePage: function($target){
			var active = $target.attr('id');
			var activenav = parseInt($(".nav a." + active).attr('order'));
			
			$(this.element).find('.nav a').each(function(){
				var order = parseInt($(this).attr('order'));
				var difference = order - activenav;
				var neworder = difference;
				// console.log(neworder);				
				if ( difference < 0 ){
					neworder = 6 + difference;
				}

				$(this).attr('order', neworder);
			})

		}
	})
})(jQuery);