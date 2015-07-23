<?php

/*
 *	Enqueue all Scripts for Infogra.ph
 */

	function spark_enqueue() {
		wp_enqueue_script( 'underscore', get_template_directory_uri()."/script/external/underscore-min.js", array('jquery') );
		wp_enqueue_script( 'backbone', get_template_directory_uri()."/script/external/backbone-min.js", array('jquery', 'underscore') );
		// wp_enqueue_script( 'smooth-scroll', get_template_directory_uri()."/script/external/smooth-scroll.js", array('jquery') );
		wp_enqueue_script( 'cycle2', get_template_directory_uri()."/script/external/cycle2/build/jquery.cycle2.min.js", array('jquery') );
		wp_enqueue_script( 'cycle2carousel', get_template_directory_uri()."/script/external/cycle2/jquery.cycle2.carousel.min.js", array() );
		// wp_enqueue_script( 'panelsnap', get_template_directory_uri()."/script/external/jquery-panelsnap/jquery.panelSnap.js", array('jquery') );
		
		wp_enqueue_script( 'site', get_template_directory_uri()."/script/site.js", array('jquery', 'underscore', 'backbone','cycle2') );

		wp_enqueue_style( 'spark_css', get_template_directory_uri()."/style.css" );
		

	}

	add_action('wp_enqueue_scripts', 'spark_enqueue');