<?php get_header();

$context = Timber::get_context();
$context["post"]= new TimberPost();

$homeGalleryContext = array(
		"spark_class" => "page-feature"
		,"post"		=> $context['post']
		,"slides"	=> get_field('slide')
		,"slide_template"	=> 'view/content/feature-slide.twig'
);

$context['home_feature_gallery'] = timber::compile('components/gallery/view/gallery.twig', $homeGalleryContext);

Timber::render('view/section/page.twig', $context);

get_footer();
