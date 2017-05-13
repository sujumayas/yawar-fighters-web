<?php 
/*
Template Name: Page Login
*
* This page template should be used to create all other Pages templates.
* just do it using the page-<slug>.php form. instead of page-custom.php
* For more info: http://codex.wordpress.org/Page_Templates
*/


 ?>
 <?php get_header(); ?>

<section style="text-align:center; color:white; font-size:18px; font-weight:bold;">
	<?php global $current_user; get_currentuserinfo(); ?>
	<?php
		if(!is_user_logged_in()){
			wp_login_form(); 
		}
		else{
			echo 'Welcome back, '.'<span style="color:red; text-decoration:underline;">'.$current_user->user_login.'</span>'.'!! You are logged in!';
			echo '';
		}
	?>
	<br>
	<a class="button-texture" style="margin-bottom:10px;" href="<?php echo wp_logout_url(); ?>">Logout</a>
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