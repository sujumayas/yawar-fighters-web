var taxonomy = module.exports;

var fs = require('fs');
var path = require('path');
var Mustache = require("mustache");

var config = require("../config.js");
var cache = require("./cache.js");

taxonomy.createTaxonomy = function(answers){
	taxonomy.answers = answers;
	var template;
	fs.readFile(config.templates_path + config.tax_template, 'UTF-8', function (err, data) {
			if (err) throw err;

		template = Mustache.render(data.toString(), taxonomy.answers);
		fs.appendFile(config.tax_dist, template, function (err){
			if (err) throw err;
		});
	});
}


taxonomy.createQuestions = function(){
	taxonomy.object_type = [
		{
			name:"post",
			value: "post"
		},
		{
			name:"page",
			value: "page"
		},
		{
			name:"attachment",
			value: "attachment"
		},
		{
			name:"revision",
			value: "revision"
		},
		{
			name:"nav_menu_item",
			value: "nav_menu_item"
		},
	];

	var cpts = cache.getCPTData();
	
	// Adding 
	for (var i = 0; i < cpts.length; i++) {
		taxonomy.object_type.push(
			{
				name: cpts[i].name,
				value: cpts[i].slug
			}
		);
	}

	taxonomy.questions = [
			{
			    type: 'input',
			    name: 'tax_name',
			    message: 'Name for your Taxonomy (should be lowercase and not include spaces or symbols)?',
			    validate: function(input){
			    	if(input.length < 32 && input.indexOf(" ") === -1){
			    		return true
			    	} else {
			    		return "Name should only contain lowercase letters and the underscore character, and not be more than 32 characters long (database structure restriction)."
			    	}
			    }		    
		  	},
	  	  	{
	  		    type: 'input',
	  		    name: 'singular',
	  		    message: 'Singular of your Taxonomy',
	  		    
	  		    default: function(answers){
	  		    	return answers.tax_name.capitalize()
	  		    }
	  		    
	  	  	},
	  	  	{
	  		    type: 'input',
	  		    name: 'plural',
	  		    message: 'Plural for your Taxonomy',
	  		    default: function(answers){
	  		    	return answers.tax_name.capitalize() + "s"
	  		    },
	  		    
	  		    
	  	  	},
	  	  	{
	  		    type: 'input',
	  		    name: 'slug',
	  		    message: 'slug for your Taxonomy',
	  		    default: function(answers){
	  		    	return answers.plural.toLowerCase().replace(/ /g, "_") // Replaces space with underscores
	  		    }	    
	  	  	},
	  	  	{
	  		    type: 'checkbox',
	  		    name: 'object_type',
	  		    message: 'Select posttypes to append the taxonomy to',
	  		    choices: taxonomy.object_type
	  	  	},
	  	  	{
	  	  		type: "confirm",
	  	  		message:"Hierarchical?",
	  	  		name: "hierarchical",
	  	  		default: true
	  	  	},
	  	  	{
	  	  		type: "input",
	  	  		message:"Enter a short Description",
	  	  		name: "description"	  	  		
	  	  	},
	  	  	{
	  	  		type: "confirm",
	  	  		message:"Should be public?",
	  	  		name: "public",
	  	  		default: true
	  	  	},
	  	  	{
	  	  		type: "confirm",
	  	  		message:"Should be Publicly Queryable?",
	  	  		name: "publicly_queryable",
	  	  		default: true
	  	  	},
	  	  	{
	  	  		type: "confirm",
	  	  		message:"Show in UI? (generate a default UI for managing this taxonomy).",
	  	  		name: "show_ui",
	  	  		default: true
	  	  	},
	  	  	{
	  	  		type: "confirm",
	  	  		message:"Show column in Admin? (Whether to allow automatic creation of taxonomy columns on associated post-types table).",
	  	  		name: "show_admin_column",
	  	  		default: true
	  	  	},
	  	  	{
	  	  		type: "confirm",
	  	  		message:"Show in Nav Menus? ",
	  	  		name: "show_in_nav_menus",
	  	  		default: true
	  	  	},
	  	  	


	];
	return taxonomy.questions;
}