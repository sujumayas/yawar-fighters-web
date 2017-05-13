
add_action( 'init', 'athelas_register_{{cpt_name}}' );
function athelas_register_{{cpt_name}}() {
	$labels = array(
		"name" => "{{plural}}",
		"singular_name" => "{{singular}}",
		"menu_name" => "{{plural}}",
		"all_items" => "All {{plural}}",
		"add_new" => "Add new {{singular}}",
		"add_new_item" => "Add new {{singular}}",
		"edit" => "Edit",
		"edit_item" => "Edit {{singular}}",
		"new_item" => "new {{singular}}",
		"view" => "view",
		"view_item" => "view {{singular}}",
		"search_items" => "Search {{plural}}",
		"not_found" => "{{plural}} not found",
		"not_found_in_trash" => "{{plural}} not found in trash",
		);

	$args = array(
		"labels" => $labels,
		"description" => "Post type {{plural}}",
		'taxonomies' => array(),
		"public" => {{public}},
		"show_ui" => true,
		"has_archive" => {{has_archive}},
		"show_in_menu" => {{show_in_menu}},
		"show_in_nav_menus"=>{{show_in_nav_menus}},
		"exclude_from_search" => false,
		"capability_type" => "{{capability_type}}",
		"map_meta_cap" => {{map_meta_cap}},
		"hierarchical" => {{hierarchical}},
		"rewrite" => array( "slug" => "{{slug}}", "with_front" => true ),
		"query_var" => true,
		"show_in_rest" => {{show_in_rest}},
		"supports" => array(
				{{#supports}}
					'{{.}}',
				{{/supports}}
		),	
	);
	register_post_type( "{{cpt_name}}", $args );

}// End of athelas_register_{{cpt_name}}()
