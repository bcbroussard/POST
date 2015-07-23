<?php get_header();

$context = Timber::get_context();
$context["post"]= new TimberPost();

$homeGalleryContext = array(
		"spark_class" => "page-feature"
		,"post"		=> $context['post']
		,"slides"	=> get_field('slide')
		,"slide_template"	=> 'view/content/feature-slide.twig'
);

$context['home_feature_gallery'] = Timber::compile('view/content/post-gallery.twig', $homeGalleryContext);
$newsPage = get_page_by_title('News In Our Community');
$context['news'] = new TimberPost($newsPage->ID);
$context['categories'] = get_terms( 'category' );
$context['tags'] = get_terms( 'post_tag' );

Timber::render('view/section/single.twig', $context);


get_footer();
