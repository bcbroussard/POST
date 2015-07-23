(function($){

	var MobileMenu = Backbone.View.extend({
		el: '#mobile-menu',
		events:{
			// 'click #mobile-trigger' : 'toggleMenu',
			'click nav > ul > li.has-children > a' : 'openSecondary',
			'click .secondary-menu > li.has-children > a' : 'openSecondary',
			'click .secondary-menu button.back' : 'closeSecondary',
			'click .tertiary-menu > li.has-children > a' : 'toggleTertiary'
		},
		initialize: function(){
			var self = this;
			$('body #mobile-trigger').click(function(){ 
				self.toggleMenu(); 
			});
		},
		toggleMenu: function(){
			$(this.el).toggleClass('menu-open');
		},

		// Secondary Menu ( Slide out Overlay)
		openSecondary: function(e){
			$(e.currentTarget).siblings('ul').toggleClass('open');
		},
		closeSecondary: function(e){
			$(e.currentTarget).parent().removeClass('open')
		},

		// Tertiary Menu ( Dropdown )
		toggleTertiary: function(){
			$(e.currentTarget).siblings('ul').toggleClass('open');
		}
	});

	$(document).ready(function(){
		var menu = new MobileMenu();
	})

})(jQuery);