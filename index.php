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
<section>
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
			<h2><?php the_title(); ?></h2>
			<?php the_content(); ?>
			
		<?php endwhile; ?>
	<?php endif; ?> 
	<?php wp_reset_postdata(); ?>	
	<!-- End of loop -->
</section>
<aside>
	<div class="aside-content">
		<h2>Aside</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum repudiandae impedit, ex, in voluptatibus iure nam dolores? Quas eligendi, earum assumenda sapiente dignissimos error quisquam optio a aliquid esse ipsum non autem obcaecati impedit reiciendis ipsa minima harum iusto animi, amet architecto enim fugiat? Eum nobis dolor necessitatibus, soluta tempora.</p>
	</div>
	<div class="aside-content">
		<h2>Aside</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum repudiandae impedit, ex, in voluptatibus iure nam dolores? Quas eligendi, earum assumenda sapiente dignissimos error quisquam optio a aliquid esse ipsum non autem obcaecati impedit reiciendis ipsa minima harum iusto animi, amet architecto enim fugiat? Eum nobis dolor necessitatibus, soluta tempora.</p>
	</div>
	<div class="aside-content">
		<h2>Aside</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum repudiandae impedit, ex, in voluptatibus iure nam dolores? Quas eligendi, earum assumenda sapiente dignissimos error quisquam optio a aliquid esse ipsum non autem obcaecati impedit reiciendis ipsa minima harum iusto animi, amet architecto enim fugiat? Eum nobis dolor necessitatibus, soluta tempora.</p>
	</div>
</aside>


<?php get_footer(); ?> 