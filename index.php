<?php 
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 */

get_header(); ?>


<h1>¡Yawar Fighters!</h1>
<!-- Begin of loop -->
<?php 
	$args = array(
          //Type & Status Parameters
          'post_type'   => array('post'), //change this one to your cpt-slug
          'posts_per_page' => -1
    );
	$query = new WP_Query( $args ); 
 ?>
<?php if($query->have_posts()): ?>
	<?php while($query->have_posts()): $query->the_post(); ?>
		<hr>
		<?php the_title(); ?>
		<?php the_content(); ?>
		
	<?php endwhile; ?>
<?php endif; ?> 
<?php wp_reset_postdata(); ?>	
<!-- End of loop -->

<?php get_footer(); ?> 