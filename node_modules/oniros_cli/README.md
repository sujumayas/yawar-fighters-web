# oniros-cli
Oniros WP Theme builder CLI npm package

## Usage

You can use oniros_cli globally or as an npm script.

Tested on npm version 3.10.8 and node v6.7.0

### Globally

This allows you to only type ```oniros``` anywhere on your system and it will run. It's really not that useful, but some people are just lazy **cough** mreynoso **cough** enough to want to shorten the command by two words.

To install the oniros client globally you need to:
```
$ sudo npm -g oniros_cli
```

then just run ```oniros``` and the options will be displayed

### Locally

To work with oniros locally as an npm script just do:
```
$ npm run oniros
```

## Options

The Oniros CLI offers

### Build Tools

1. **Watch Main**: Watch the theme CSS and JS files
2. **Watch All**: Main Theme and Login SCSS and JS
3. **Build Main**: Main theme SCSS and JS
4. **Build All**: Main Theme/Login SCSS/JS, Favicon, Imagemin
5. **Process Favicon**: (Connect to realfavicongenerator api and produce favicons)
6. **Minimize Images**: using imagemin
7. **Build Login CSS**: just do that
8. **Zip Theme**: Precisely that, so you can just upload it.

### Wordpress Utilities

1. **Create a WP Custom Post Type** : Interactive interface to add CPT to your oniros theme. It will let you choose if you want a single-cpt.php and an archive-cpt.php template files generated
2. **Create Page Template** : Creates a page template ;-)

##Roadmap

- Cache to JSON system
- Update Cache Command
- Add WP Taxonomies
- Add WP Menues




