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

$context = Timber::get_context();
$context['post'] = new TimberPost();


$mycontext = array(
	
);
$context = array_merge($context, $mycontext);

Timber::render('view/section/header.twig', $context);