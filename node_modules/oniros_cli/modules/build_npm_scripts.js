var build = module.exports;

var shell = require("shelljs");
var inquirer = require("inquirer");

build.choices = [
	{
		name:"1) Watch Main (Main theme SCSS and JS)",
		value: "watch:main"
	},
	{
		name:"2) Watch All (Main Theme and Login SCSS and JS)",
		value: "watch:all"
	},
	{
		name:"3) Build Main (Main theme SCSS and JS)",
		value: "build:main:all"
	},
	{
		name: "4) Build All (Main Theme/Login SCSS/JS, Favicon, Imagemin)",
		value: "build:all"
	},
	{
		name: "5) Process Favicon (Connect to realfavicongenerator api and produce favicons)",
		value: "favicon"
	},
	{
		name: "6) Minimize Images",
		value: "imagemin"
	},
	{
		name: "7) Build Login CSS",
		value: "login:build:css"
	},
	{
		name: "8) Zip Theme",
		value: "zip"
	}
];

build.questions = [
			{
			    type: 'list',
			    name: 'script',
			    message: 'Choose your build script',
			    choices: build.choices
		  	}
		];


