<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

include("component/sign-in-form/sign-in.php");


$context = Timber::get_context();
$context['post'] = new TimberPost();
$main_nav_context = array(
	"nav"			=>	new TimberMenu('Main Nav')
	,"spark_class"	=>  "main-nav"
);
$header_sub_context = array(
	"nav"			=>	new TimberMenu('Header Sub')
	,"spark_class"	=> "header-sub"
);
$search_context = array(
	"field" => array(
		"placeholder"	=>	"Enter Search Terms"
		,"submit_value"	=>  "Search"
	)
);
$mobile_nav_context = array(
		"main"		=> $main_nav_context
		,"sub"		=> $header_sub_context
	);

$site_notice_context = array(
	"notice"=> array(
		"active"	=>	get_field( 'active', 'option' )
	 	,"alert"		=>	get_field( 'alert', 'option' )
	 	,"text"		=>	get_field( 'text', 'option' )
		)
	 	
	);



$mycontext = array(
	"site_logo" 		=> array(
	 	"desktop"	=>	get_field( 'logo', 'option' )
	 	,"mobile"	=>	get_field( 'mobile_logo', 'option')
	)
	,"sign_in_form"	=> Timber::compile('component/sign-in-form/view/sign-in-form.twig')
	,"main_nav"		=> Timber::compile('views/components/nav.twig', $main_nav_context)
	,"sub_nav"			=> Timber::compile('views/components/nav.twig', $header_sub_context)
	,"mobile_nav"		=> Timber::compile('component/mobile-menu/mobile-menu.twig',$mobile_nav_context)
	,"search"			=> Timber::compile('views/components/form/slideout_search.twig', $search_context)
	,"site_notice"	=> Timber::compile('components/site-notice/view/site-notice.twig', $site_notice_context)
);
$context = array_merge($context, $mycontext);

Timber::render('view/section/header.twig', $context);