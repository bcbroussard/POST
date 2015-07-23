<?php
get_header();

$context = Timber::get_context();
$context["post"]= new TimberPost();
$newsGalleryContext = array(
	"post"		=> $context["post"]
	,"slides"	=> get_field('slide')
	,"slide_template"	=> 'view/content/feature-slide.twig'
	,"spark_class"		=> 'page-feature'
	);
$context['news_feature_gallery'] = timber::compile('components/gallery/view/gallery.twig', $newsGalleryContext);
$context['topics'] = Timber::get_terms('category');
$context['tags'] = Timber::get_terms('tag');



$newsArgs = array("showposts" => 2, "category__not_in" => "event" );
$context['news'] = get_posts($newsArgs);

$eventArgs = array("showposts" => 1, "category_name" => "event" );
$context['events'] = get_posts($eventArgs);

$newsArgs = array("showposts" => 2 );
$context['news'] = get_posts($newsArgs);

$context['newsletter'] = do_shortcode('[contact-form-7 id="303" title="Newsletter Subscribe"]');

$pressArgs = array("showposts" => 1, "category_name" => "press" );
$context['press'] = array(
	'posts' => get_posts($pressArgs)
	,'term' => get_term( 'press', 'category' )
	,'contact' => array(
		'name'	=> get_field('media_contact_name', 'option')
		,'title'=> get_field('media_contact_title', 'option')
		,'phone'=> get_field('media_phone', 'option')
		,'email'=> get_field('media_contact_email', 'option')
	)
);

Timber::render('view/section/news.twig', $context);

get_footer();