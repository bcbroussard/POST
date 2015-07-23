(function($){

	jQuery(window).load(function() {
		jQuery.expr[":"].external = function(a) {
			return !a.href.match(/^mailto\:/) && !a.href.match(/^tel\:/) && a.hostname != location.hostname

		};
        // OPEN 3RD PARTY SITE IN NEW TAB/WINDOW
        jQuery('#url_link').click(function() {
        	window.open(this.href);
        	return false;
        });
        // ADD BOOTSTRAP DATA-TOGGLE ATTRIBUTE TO THE LINKS
        jQuery('a:external').attr('data-toggle', 'modal');
        jQuery('a:external').attr('data-target', '#speedbump');
        jQuery("a:external").addClass("ext_link");
        	
    	jQuery('a.ext_link').click(function(e) {
    		e.preventDefault();
    		var url = jQuery(this).attr('href');
    		var title = jQuery(this).attr('title');
    		console.log(url);
    		jQuery('#url_link').attr('href', url);
    		jQuery('h3#speedbump-title').replaceWith('<h3 id="speedbump-title">' + title + '</h3>');
    		
    		jQuery('.modal').removeClass('closed');

    		jQuery('#speedbump.modal .close, #speedbump.modal .dismiss, #url_link').click(function() {
    			jQuery('#speedbump').addClass('closed');
            }); // DESTROY MODAL IF USER CONTINUES
    	});
    });


})(jQuery)