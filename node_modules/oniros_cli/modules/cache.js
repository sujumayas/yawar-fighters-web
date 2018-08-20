var cache = module.exports;


var fs = require('fs');
var path = require('path');
var beautify = require('js-beautify').js_beautify;

var config = require("../config.js");

cache.createCacheFileIfNotExists = function(){

	fs.access(config.cache_file, fs.constants.F_OK ,  function(err){
		if(err){
			fs.writeFile(config.cache_file , beautify(JSON.stringify(config.cache_struct), {indent_size:4}), function (err){
				if (err) throw err;
			});
		}		
	});		 
}


// cache.update = function(){
// 	fs.readFile(config.cache_file, 'UTF-8', function(err, data){
		
// 		var cache = JSON.parse(data);
// 		var keep = true;
// 		var new_cache = "";
		
// 		while(keep){
// 			// update pages
// 			for(var i = 0; i < cache.pages.length; i++){

// 				var file = config.project_root + "/" + cache.pages[i].template;				
// 				var breakLoop = false;
				
// 				fs.access(file, fs.constants.F_OK, function(err){
// 					if(err){
// 						// deleting with -1
// 						var deleted = cache.pages.splice(i -1 , 1);	
// 						new_cache = JSON.stringify(cache);
// 						console.log(new_cache);	
// 						breakLoop = true;
// 					}
// 				});
// 				if(breakLoop){ break;}
// 			}
// 			keep = false;
// 		}		
// 		// TODO somehow it doesn't update
// 		console.log(beautify(new_cache, {indent_size:4}));
// 		fs.writeFile(config.cache_file , beautify(new_cache, {indent_size:4}), function (err){
// 			if (err) throw err;
// 		});

// 	});
// }

cache.addTaxonomy = function(answers){
	fs.readFile(config.cache_file, 'UTF-8', function(err, data){
		var cache = JSON.parse(data);		
		cache.taxonomies.push({
			name:answers.tax_name,
			slug: answers.slug,
			post_types: answers.object_type
		});
		fs.writeFile(config.cache_file , beautify(JSON.stringify(cache), {indent_size:4}), function (err){
			if (err) throw err;
		});

	});
}

cache.addPage = function(answers){

	fs.readFile(config.cache_file, 'UTF-8', function(err, data){
		var cache = JSON.parse(data);
		var name = answers.page_name.toLowerCase();
		cache.pages.push({
			name:name,
			template: "page-" + name + ".php"
		});
		fs.writeFile(config.cache_file , beautify(JSON.stringify(cache), {indent_size:4}), function (err){
			if (err) throw err;
		});

	});
}

cache.addCPT = function(answers){
	fs.readFile(config.cache_file, 'UTF-8', function(err, data){
		var cache = JSON.parse(data);		
		cache.cpts.push({
			name:answers.cpt_name,
			slug: answers.slug
		});
		fs.writeFile(config.cache_file , beautify(JSON.stringify(cache), {indent_size:4}), function (err){
			if (err) throw err;
		});

	});
}

cache.getAllData = function(){
    var toReturnData;
    toReturnData =  fs.readFileSync(config.cache_file, 'UTF-8');
   
    return JSON.parse(toReturnData);
}

cache.getCPTData = function(){
    var toReturnData;
    toReturnData =  fs.readFileSync(config.cache_file, 'UTF-8');
       
    return JSON.parse(toReturnData).cpts;
}
