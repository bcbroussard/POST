<?php

/* Spark Category Roll */

get_header();

/* Content */
	$context= Timber::get_context();

/*
Category Sidebar
	*/
	$catContext = array('nav' => new TimberTerm('categories') );
	$context['categories'] = Timber::compile('/views/components/category_nav.html.twig');
/*
	Blogroll
		Date
		Title
		Thumb
		Excerpt
*/

	$blogArgs = array(
		"posts_per_page"	=> '10'
		,"cat"			=> get_query_var('cat')
		,"category__not_in" => '8'
	);

	$featuredArgs = array(
		"posts_per_page"	=> '10'
		,"cat"			=> get_query_var('cat')
		,"category__in" 	=> '8'
	);


	$context['term'] =  get_term( $featuredArgs['cat'], 'category');
	$context['categories'] = get_terms( 'category' );
	$context['tags'] = get_terms( 'post_tag' );
	$context['blog'] = Timber::get_posts($blogArgs); 
	$context['featured'] = Timber::get_posts($featuredArgs); 

	Timber::render('/view/section/archive.twig', $context);	

get_footer();