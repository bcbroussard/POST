<?php

	function modal_enqueue() {
		wp_enqueue_script( 'modal-js', get_template_directory_uri()."/components/modal/script/modal.js", array('jquery') );
		wp_enqueue_style( 'modal-css', get_template_directory_uri()."/components/modal/modal.css" );
	}

	add_action('wp_enqueue_scripts', 'modal_enqueue');