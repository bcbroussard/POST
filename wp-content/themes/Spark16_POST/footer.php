	</div>
<?php 
	$context = Timber::get_context();

	Timber::render('view/section/footer.twig', $context);

	wp_footer(); 
?>
</body>
</html>