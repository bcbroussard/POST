(function($){
	$(document).ready(function(){

		if( !localStorage.getItem("NoticeClosed") ){
			
			var $siteNoticeEl = $('.site-notice');

			$('body').addClass('site-notice-open');

			$siteNoticeEl
			.removeClass("closed")
			.on('click', function(){
				$siteNoticeEl.addClass("closed");
				$('body').removeClass('site-notice-open');

				localStorage.setItem("NoticeClosed","true");
			})
		}

	})
})(jQuery)
