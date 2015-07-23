<?php
	get_header();

	$context = Timber::get_context();
	$context["post"]= new TimberPost();
	$homeGalleryContext = array(
			"spark_class" 	=> "page-feature"
			,"slides"			=> get_field('slide')
			,"slide_template"	=> 'view/content/feature-slide.twig'
	);
	$previewBlock = array(
			"feed"	=> get_field('block')
			,"slide_template"	=> 'view/content/preview-block.twig'
			,"spark_class"		=> 'content-preview-section container'
	);
	$context['home_feature_gallery'] = timber::compile('components/gallery/view/gallery.twig', $homeGalleryContext);
	$context['preview_block'] = timber::compile('views/components/static_feed.html.twig', $previewBlock);

	$featureArgs = array(
		"cat" => 8
		,"showposts" => 1
		);
	$newsArgs = array(
		"category__not_in" => array(8, 9)
		,"showposts" => 2
		);
	$newsContext = array(
		"feature" => get_posts($featureArgs)
		,"news" => get_posts($newsArgs)
		);

	foreach( $newsContext as $key => $feed ){
		foreach ( $feed as $k => $v ){
			$feed[$k] = new TimberPost($v->ID);
		}
		$newsContext[$key] = $feed;
	}

	$context['news_community'] 	= Timber::compile('view/section/news_community.twig', $newsContext );
	$context["sign_in_form"]	= Timber::compile('component/sign-in-form/view/sign-in-form.twig');
	
	$solutionContext = array(
		"post"		=> $context['post'],
		"content" 	=> get_field('content_block'),
		"classes"	=> "banking-solutions"
	);
	$context['solutions']		= Timber::compile('view/content/banking-solutions-list.twig', $solutionContext );

	Timber::render('view/section/home.twig', $context);
	
	get_footer();