(function($){
	$(document).ready(function(){

		$('.slideout-search .switch, .slideout-search .close').on('click', function(){
			$(this).parent().parent().parent().toggleClass('open');
		})

		$('.sign-in-button').click(function(){
			$('.sign_on_box.header').toggleClass('open')
		})

	})


})(jQuery)