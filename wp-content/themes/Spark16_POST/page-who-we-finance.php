<?php
	get_header();
	$context = Timber::get_context();
	$context["post"]= new TimberPost();
	$context["sectors"]=array("Natural & Organic Products", "Sustainably-Managed Business", "Green Building", "Clean Energy", "Nonprofits", "B Corps");
	$homeGalleryContext = array(
			"spark_class"			=> "page-feature"
			,"slides"	=> get_field('slide')
			,"post"		=> $context['post']
			,"slide_template"	=> 'view/content/feature-slide.twig'
	);
	$context['home_feature_gallery'] = timber::compile('components/gallery/view/gallery.twig', $homeGalleryContext);
	Timber::render('view/section/who-we-finance.twig', $context);
	get_footer();