var cpt = module.exports;

var fs = require('fs');
var path = require('path');
var Mustache = require("mustache");

var config = require("../config.js");
// Because JS doesn't have native capitalize....

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

cpt.createCPT = function(answers){
	cpt.answers = answers;
	var template;
	fs.readFile(config.templates_path + config.cpt_template, 'UTF-8', function (err, data) {
			if (err) throw err;

		template = Mustache.render(data.toString(), cpt.answers);
		fs.appendFile(config.cpt_dist, template, function (err){
			if (err) throw err;
		});
	});
}

cpt.createCPTSinglePage = function(answers){
	var single_template;
	fs.readFile(config.templates_path + config.single_template, 'UTF-8', function (err, data) {
	  if (err) throw err;
	  
	  single_template = Mustache.render(data.toString(), answers);
	  fs.writeFile(path.resolve(config.project_root,"single-" + answers.cpt_name + ".php") , single_template, function (err){
			if (err) throw err;
		});
	});	
}

cpt.createCPTArchivePage = function(answers){
	var archive_template;
	fs.readFile(config.templates_path + config.archive_template, 'UTF-8', function (err, data) {
	  if (err) throw err;
	  
	  archive_template = Mustache.render(data.toString(), answers);
	  fs.writeFile(path.resolve(config.project_root,"archive-" + answers.cpt_name + ".php") , archive_template, function (err){
			if (err) throw err;
		});
	});		
}

cpt.support = [
	{
		name:"Title",
		value: "title"
	},
	{
		name:"Editor (content)",
		value: "editor"
	},
	{
		name:"Author",
		value: "author"
	},
	{
		name:"Thumbnail (featured image, Oniros supports Thumbnails by default)",
		value: "thumbnail"
	},
	{
		name:"Excerpt",
		value: "excerpt"
	},
	{
		name:"Trackbacks",
		value: "trackbacks"
	},
	{
		name:"Custom Fields (WP Built-in field)",
		value: "custom-fields"
	},
	{
		name:"Comments",
		value: "comments"
	},
	{
		name:"Revisions (Post handles different versions)",
		value: "revisions"
	},
	{
		name:"Page Atrributes (menu order, hierarchical must be true to show Parent option)",
		value: "page-attributes"
	},
	{
		name:"Post Formats (WP new Post Formats, currently unsupported by Oniros)",
		value: "post-formats"
	},
];


cpt.questions = [
	{
	    type: 'input',
	    name: 'cpt_name',
	    message: 'Name for your Custom Post Type (should be lowercase)?',
	    validate: function(input){
	    	if(["post", "page","attachment", "revision","nav_menu_item","action","author","order","theme"].indexOf(input.toLowerCase()) === -1 && input.indexOf(" ") === -1){
	    		return true
	    	} else {
	    		return "The selected post name: ["+ input +"] is reserved by wordpress or you used an invalid character. You should only use letters."
	    	}
	    }
	   
	    
  	},
  	{
	    type: 'input',
	    name: 'singular',
	    message: 'Singular of your CPT',
	    
	    default: function(answers){
	    	return answers.cpt_name.capitalize()
	    }
	    
  	},
  	{
	    type: 'input',
	    name: 'plural',
	    message: 'Plural for your CPT',
	    default: function(answers){
	    	return answers.cpt_name.capitalize() + "s"
	    },
	    
	    
  	},
  	{
	    type: 'input',
	    name: 'slug',
	    message: 'slug for your CPT',
	    default: function(answers){
	    	return answers.plural.toLowerCase()
	    }	    
  	},
  	{
	    type: 'checkbox',
	    name: 'supports',
	    message: 'Suport capabilities? Use space to select',
	    paginated: true,
	    choices: cpt.support
  	},  	
  	{
  		type: "confirm",
  		message:"Public",
  		name: "public",
  		default: true
  	},
  	{
  		type: "confirm",
  		message:"Create Single Page for this CPT?",
  		name: "create_single",
  		default: true
  	},
  	{
  		type: "confirm",
  		message:"Exclude from search",
  		name: "exclude_from_search",
  		default: false
  	},
  	{
  		type: "confirm",
  		message:"Show in Admin Menu",
  		name: "show_in_menu",
  		default: true
  	},
  	{
  		type: "confirm",
  		message:"Show in Nav Menus (Avaliable to show on the menu builder)",
  		name: "show_in_nav_menus",
  		default: false
  	},
  	{
  		type: "list",
  		message:"Capability type: Post or Page",
  		name: "capability_type",
  		choices: ["post", "page"],
  		default: 0
  	},
  	{
  		type: "confirm",
  		message:"Map Meta Capabilities (Allow CPT to have meta capabilities)",
  		name: "map_meta_cap",
  		default: true
  	},
  	{
  		type: "confirm",
  		message:"Hierarchical",
  		name: "hierarchical",
  		default: false
  	},
  	{
  		type: "confirm",
  		message:"Has Archive (will also create an archive-[cpt-name].php file)",
  		name: "has_archive",
  		default: true
  	},
  	{
  		type: "confirm",
  		message:"Show in RESTApi",
  		name: "show_in_rest",
  		default: true
  	},
];



