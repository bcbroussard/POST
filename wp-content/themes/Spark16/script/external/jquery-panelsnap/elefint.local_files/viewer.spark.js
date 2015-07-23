(function($){
	$.widget('spark.viewer',{
		options: {
			type: 'design',
			data: {}
		},
		_create: function(){

			switch ( this.options.type ){
				case "peephole":
				case "process":
					this._getPeephole();
				break;
				default: 
					this._getContent();
				break;
			}
		},
		_destroy: function(){},
		_getContent: function(){
			var self = this;
			var view = new EJS({url: 'js/components/viewer/view/'+ this.options.type +'.ejs'}).render(this.options.data);
			$(this.element).append(view);
			$('.cycle-slideshow').cycle();
		},
		_getPeephole: function(){
			var self = this;
			var view = new EJS({url: 'js/components/viewer/view/'+ this.options.type +'.ejs'}).render(this.options.data);
			$(this.element).append(view);

			$('.drag').each(function(){
				$(this).draggable({revert:'invalid'});
				$(this).data({
					'originalLeft': $(this).css('left'),
	                'originalTop': $(this).css('top')
	            });
			});
			console.log(self.options.data);
			$('.dropbox').droppable({
				drop: function(event, ui){
					$('#'+ ui.draggable[0].id).addClass('open'); 
					var view = new EJS({url: 'js/components/viewer/view/peep.ejs'}).render(self.options.data.slides[ui.draggable[0].id]);
					$('.peeper').addClass('open');

					setTimeout(function() {
						$('.peeper').prepend(view);
						$('.peep').fadeIn(500);
					}, 1200);

					$('.peeper .close-peeper').unbind().click(function(){
						self._closePeep();
					});
				}
			});
			$('.reset').click(function(){
				self._resetPeephole(this);;
			})
		},
		_resetPeephole: function(){
			$('.drag').each(function(){
				$(this)
					.css({
						'left': $(this).data('originalLeft'),
	                	'top': $(this).data('originalTop')
	            	})
	            	.removeClass('open');
			})
		},
		_closePeep: function(){
			var self = this;
			this._resetPeephole();
			$(this.element).find('.peeper').removeClass('open');
			setTimeout(function() {
			      $(self.element).find('.peep').remove();
			}, 1000);
		} 
	})
})(jQuery);