(function($){



	$('.modal-trigger').on('click', function(){
		var $modal = $($(this).attr('modal-class'));

		$modal.removeClass('closed');
	});

	$('.close').on('click', function(){
		$(this).parent().remove();
	});


})(jQuery)