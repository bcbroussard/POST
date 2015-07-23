<?php

	function sign_in_enqueue() {
		wp_enqueue_script( 'sign-in-js', get_stylesheet_directory_uri()."/component/sign-in-form/script/sign-in.js", array('jquery') );
		wp_enqueue_style( 'sign-in-css', get_stylesheet_directory_uri()."/component/sign-in-form/sign-in.css" );
	}

	add_action('wp_enqueue_scripts', 'sign_in_enqueue');