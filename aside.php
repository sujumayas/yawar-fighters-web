<aside>
	<?php
		if( have_rows('aside','option') ):
		    while ( have_rows('aside','option') ) : the_row();
		     ?>
		        <div class="aside-content">
					<h2><?php the_sub_field('option_title'); ?></h2>
					<p><?php the_sub_field('option_content'); ?></p>
					<a href="<?php the_sub_field('option_link'); ?>" title=""><img style="width:100%;" src="<?php the_sub_field('option_image'); ?>" alt="img"></a>
				</div>
		    <?php endwhile;
		endif;?>
</aside>