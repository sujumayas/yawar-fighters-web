var category = module.exports;

var fs = require('fs');
var path = require('path');
var Mustache = require("mustache");
var config = require("../config.js");

category.questions = [
	{
	    type: 'input',
	    name: 'name',
	    message: 'Slug of the category you want to create a custom archive for.',	    
  	}
];

category.createCategoryPage = function(answers){
	var page_template;
	fs.readFile(config.templates_path + config.cat_template, 'UTF-8', function (err, data) {
	  if (err) throw err;
	  
	  page_template = Mustache.render(data.toString(), answers);
	  fs.writeFile(path.resolve(config.project_root,"category-" + answers.name.toLowerCase() + ".php") , page_template, function (err){
			if (err) throw err;
		});
	});	
}