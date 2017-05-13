#! /usr/bin/env node


var colors = require('colors');
var fs = require('fs');
var path = require('path');
var Mustache = require("mustache");
var shell = require("shelljs");
var inquirer = require("inquirer");
var ui = new inquirer.ui.BottomBar();

var config = require("../config.js");
var cpt = require("../modules/cpt.js");
var build = require("../modules/build_npm_scripts.js");
var wp = require("../modules/wordpress_menu.js");
var main_menu = require("../modules/main_menu.js");
var page = require("../modules/page.js");
var cache = require("../modules/cache.js");
var category = require("../modules/cat-archive.js");
var taxonomy_archive = require("../modules/tax-archive.js");
var taxonomy = require("../modules/taxonomy.js");

console.log("\n#####################".yellow);
console.log("# Welcome to Oniros #".yellow);
console.log("#####################\n".yellow);
console.log("Remember you can exit at any time using ctrl+C\n".red);



// Functions


inquirer.prompt(main_menu.questions).then(function (answers) {
	
	cache.createCacheFileIfNotExists();
	// Oniros NPM Scripts
	if(answers.submenu == "build_tools"){
		inquirer.prompt(build.questions).then(function (answers) {
			shell.exec("npm run " + answers.script); 
		});
	}
	// Wordpress templating
	else if(answers.submenu == "wordpress"){
		inquirer.prompt(wp.questions).then(function(answers){
			if(answers.submenu =="create_cpt"){
				inquirer.prompt(
					cpt.questions
				).then(function(answers){					
					if(answers.create_single){
						cpt.createCPTSinglePage(answers);
					}					
					if(answers.has_archive){
						cpt.createCPTArchivePage(answers);
					}
					cpt.createCPT(answers);
					cache.addCPT(answers);

				});
			}
			else if (answers.submenu == "create_page_template"){
				inquirer.prompt(page.questions).then(function(answers){
					page.createTemplatePage(answers);
					cache.addPage(answers);
				});
			}
			else if (answers.submenu == "create_cat_template"){
				inquirer.prompt(category.questions).then(function(answers){
					category.createCategoryPage(answers);					
				});
			}

			else if (answers.submenu == "create_tax_template"){
				inquirer.prompt(taxomony.questions).then(function(answers){
					taxonomy_archive.createTaxonomyPage(answers);					
				});
			}
			else if (answers.submenu == "create_taxonomy"){
				inquirer.prompt(taxonomy.createQuestions()).then(function(answers){
					taxonomy.createTaxonomy(answers);	
					cache.addTaxonomy(answers);			
				});				
			}

			
		});
		
	} 	
	 
});




