var config = module.exports;

var path = require('path');

// root
config.project_root = path.resolve(process.cwd(), "");
// cache file
config.cache_file = config.project_root + "/oniros.json";
config.cache_struct = {
	"cpts": [],
	"pages": [],
	"taxonomies": []
}

// Templates folder
config.templates_path = path.resolve(__dirname,"templates/wordpress/");


// CPT
config.cpt_template = "/cpt.js";
config.cpt_dist = path.resolve(process.cwd(),"includes/functions/posttypes.php");

// Page Template
config.page_template = "/page-custom.js";

// Category Archive Template
config.cat_template = "/category-cpt.js";

// Taxonomy Archive Template
config.tax_archive_template = "/taxonomy-cpt.js";

// Single CPT
config.single_template = "/single-cpt.js";

// Archive
config.archive_template = "/archive-cpt.js";

// Taxonomy
config.tax_template = "/taxonomy.js";
config.tax_dist = path.resolve(process.cwd(),"includes/functions/taxonomies.php");