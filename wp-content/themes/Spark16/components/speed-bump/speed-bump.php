<?php

	function speed_bump_enqueue() {
		wp_enqueue_script( 'speed-bump-js', get_template_directory_uri()."/components/speed-bump/script/speed-bump.js", array('jquery') );
		wp_enqueue_style( 'speed-bump-css', get_template_directory_uri()."/components/speed-bump/speed-bump.css" );
	}

	add_action('wp_enqueue_scripts', 'speed_bump_enqueue');