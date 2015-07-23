<?php
require_once( "component/mobile-menu/mobile-menu.spark.php" );
require_once( "component/pie-chart/pie-chart.php" );
require_once( TEMPLATEPATH."/components/site-notice/site-notice.php" );
require_once( TEMPLATEPATH."/components/speed-bump/speed-bump.php" );
require_once( TEMPLATEPATH."/components/gallery/gallery.php" );
require_once( TEMPLATEPATH."/components/modal/modal.php" );

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
	wp_enqueue_style( 'owl_animate', get_stylesheet_directory_uri()."/style/owl/animate.css" );
	wp_enqueue_style( 'owl_carousel', get_stylesheet_directory_uri()."/style/owl/owl.carousel.css" );
	wp_enqueue_style( 'owl_theme', get_stylesheet_directory_uri()."/style/owl/owl.theme.css" );
	wp_enqueue_style( 'owl_transitions', get_stylesheet_directory_uri()."/style/owl/owl.transitions.css" );

	wp_enqueue_script( 'owl', get_stylesheet_directory_uri()."/script/owl-carousel/owl.carousel.min.js", array('jquery') );

	wp_enqueue_script( 'imagesloaded', get_stylesheet_directory_uri()."/script/isotope/imagesloaded.pkgd.min.js", array('jquery'));
	wp_enqueue_script( 'isotope', get_stylesheet_directory_uri()."/script/isotope/isotope.pkgd.min.js", array('imagesloaded') );
	wp_enqueue_script( 'packery', get_stylesheet_directory_uri()."/script/isotope/packery-mode.pkgd.min.js", array('isotope') );

    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri().'/style.css' );
    wp_enqueue_script( 'child-site', get_stylesheet_directory_uri().'/script/site.js', array('jquery') );
}


function my_gallery_shortcode( $output = '', $atts, $content = false, $tag = false ) {
	$return = $output; // fallback

	// retrieve content of your own gallery function
	$my_result = get_my_gallery_content( $atts );

	// boolean false = empty, see http://php.net/empty
	if( !empty( $my_result ) ) {
		$return = $my_result;
	}
	return $return;
}

function get_my_gallery_content($atts){
	foreach ( explode(',', $atts['ids'] ) as $id ){
		$context["feed"][] = array(
			'medium' => wp_get_attachment_image_src( $id, 'Medium' )
			,'full'		=> wp_get_attachment_image_src( $id, 'Full' )
		);
	}
	$context["slide_template"] = 'views/content/post_gallery_img.twig';
	return Timber::compile('view/component/post_gallery.twig', $context);
}

add_filter( 'post_gallery', 'my_gallery_shortcode', 10, 4 );
