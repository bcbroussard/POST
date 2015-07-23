<?php
add_action( 'wp_enqueue_scripts', 'enqueue_chart' );
function enqueue_chart(){
	wp_enqueue_script( 'chart_js', get_stylesheet_directory_uri().'/component/pie-chart/js/Chart.min.js', array('jquery') );
}