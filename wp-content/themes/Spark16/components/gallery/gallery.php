<?php

	function gallery_enqueue() {
		wp_enqueue_script( 'gallery-js', get_template_directory_uri()."/components/gallery/script/gallery.js", array('jquery') );
		wp_enqueue_style( 'gallery-css', get_template_directory_uri()."/components/gallery/gallery.css" );
	}

	add_action('wp_enqueue_scripts', 'gallery_enqueue');