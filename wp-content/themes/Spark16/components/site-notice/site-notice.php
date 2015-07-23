<?php

	function site_notice_enqueue() {
		wp_enqueue_script( 'site-notice-js', get_template_directory_uri()."/components/site-notice/script/site-notice.js", array('jquery') );
		wp_enqueue_style( 'site-notice-css', get_template_directory_uri()."/components/site-notice/site-notice.css" );
	}

	add_action('wp_enqueue_scripts', 'site_notice_enqueue');