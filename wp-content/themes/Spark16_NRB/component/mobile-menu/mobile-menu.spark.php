<?php
/* 
	Component: Mobile Menu
	Description: 	- Slide out mobile menu with overlapping secondary and accordion tertiary menus
					- Uses Susy Grid system
*/

	function mobile_menu_enqueue() {
		wp_enqueue_script( 'mobile-menu-js', get_stylesheet_directory_uri()."/component/mobile-menu/mobile-menu.js", array('jquery', 'backbone') );
		wp_enqueue_style( 'mobile-menu-css', get_stylesheet_directory_uri()."/component/mobile-menu/mobile-menu.css" );
	}

	add_action('wp_enqueue_scripts', 'mobile_menu_enqueue');