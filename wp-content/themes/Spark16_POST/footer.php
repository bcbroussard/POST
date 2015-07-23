	</div>
<?php 
	$context = Timber::get_context();

	$qlContext = array("nav"=>new TimberMenu('Quick Links'));
	$context['quick_links'] = Timber::compile('views/components/nav.twig', $qlContext);
	$context['logos'] = get_field('Logos', 'option');
	$context['facebook'] = get_field('facebook', 'option');
	$context['twitter'] = get_field('twitter', 'option');
	$context['linked_in'] = get_field('linked_in', 'option');
	$context['stay_connected'] = do_shortcode( '[contact-form-7 id="303" title="Newsletter Subscribe"]' );
	$context['rates'] = get_field('rate_group', 'option');

	Timber::render('view/section/footer.twig', $context);

	wp_footer(); 
?>
</body>
</html>