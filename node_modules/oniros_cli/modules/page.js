var page = module.exports;

var fs = require('fs');
var path = require('path');
var Mustache = require("mustache");
var config = require("../config.js");

page.questions = [
	{
	    type: 'input',
	    name: 'page_name',
	    message: 'Name for the page template (Capitalized would be better)',	    
  	}
];

page.createTemplatePage = function(answers){
	var page_template;
	fs.readFile(config.templates_path + config.page_template, 'UTF-8', function (err, data) {
	  if (err) throw err;
	  
	  page_template = Mustache.render(data.toString(), answers);
	  fs.writeFile(path.resolve(config.project_root,"page-" + answers.page_name.toLowerCase() + ".php") , page_template, function (err){
			if (err) throw err;
		});
	});	
}