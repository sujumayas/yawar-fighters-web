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
			echo '<br>
				<a class="button-texture" style="margin-bottom:10px;" href="<?php echo wp_logout_url(); ?>">Logout</a>';
		}
	?>
</section>

<?php include 'aside.php'; ?>

<?php get_footer(); ?> 