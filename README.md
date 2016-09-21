[NodeJS Setup]
1. Check version
	> node -v
	> npm -v
2. Download and install NodeJS from https://nodejs.org - v6.6.0 Current (~13mb)
3. Check version again (restart CMD)
	> node -v
	> npm -v

[Visual Studio Code]
1. Download and install VS Code from http://code.visualstudio.com/ (~31mb)
	1.1 Check all options
2. Install plugins (Optional)
	2.1 JS-CSS-HTML-formatter
	2.1 amVim
		2.1.1 Set amVim.bindCtrlCommands to false to use CTRL bindings of VS Code
			2.1.1.1 In VS Code, press F1 and type "Open User Settings".
			2.1.1.2 Add the following line:
				> "amVim.bindCtrlCommands": false,

[Sail.js]
1. Install Sails.js
	> npm -g install sails
2. Create new Project
	2.1 Make sure you are in the correct directory..
		> cd C:\Projects
	2.2 Create Sails Project
		> sails new ZeroToAngularSailsTDD
		> cd ZeroToAngularSailsTDD
		> sails lift
	2.3 Go to http://localhost:1337
	2.4 Press CTRL+C to stop server
	2.5 Read more in https://github.com/sails101

[nodemon]
1. Install nodemon
	> npm install -g nodemon
2. Run sails project using nodemon
	> nodemon app

[grunt]
1. Install grunt-cli for sails automation
	> npm install -g grunt-cli

[Bootstrap - Bootswatch Theme (Paper) and jQuery]
1. Download bootstrap - https://getbootstrap.com (v3.3.7)
2. Extract "bootstrap-3.3.7-dist.zip"
3. Copy the files from the "bootstrap-3.3.7-dist" folder to "ZeroToAngularSailsTDD/assets" folder
	3.1 [JS] bootstrap-3.3.7-dist/js/bootstrap.min.js -> ZeroToAngularSailsTDD/assets/js/dependencies/bootstrap.min.js
	3.2 [FONTS] bootstrap-3.3.7-dist/fonts -> ZeroToAngularSailsTDD/assets/fonts
	3.3 [CSS] Skip since we will use Paper theme
4. Download Bootswatch Paper Theme - http://bootswatch.com/paper/bootstrap.min.css
	4.1 Save it in ZeroToAngularSailsTDD/assets/styles
5. Download jQuery - https://jquery.com/download (v3.1.0)
	5.1 Download the compressed, production jQuery 3.1.0
	5.2 Copy "jquery-3.1.0.min.js" into the "ZeroToAngularSailsTDD/assets/js/dependencies/" folder
	5.3 Ensure that sails loads jQuery first before bootstrap.min.js:
		5.3.1 Modify "ZeroToAngularSailsTDD/tasks/pipeline.js":
			// Dependencies like jQuery, or Angular are brought in here
			'js/dependencies/jquery-3.1.0.min.js',
			'js/dependencies/**/*.js',
			....
			
6. Check if bootstrap and other components was properly added
	6.1 Replace content of "ZeroToAngularSailsTDD/views/homepage.ejs" with:
			<div class='container'>
				<br />
				<div class='panel panel-success'>
					<div class='panel-heading'>
						<h3 class='panel-title'>Panel Title - Green (Success)</h3>
					</div>
					<div class='panel-body'>
						Panel Content

						<hr />

						<a href="#" class="btn btn-default">Default</a>
						<a href="#" class="btn btn-primary">Primary</a>
						<a href="#" class="btn btn-success">Success</a>
						<a href="#" class="btn btn-info">Info</a>
						<a href="#" class="btn btn-warning">Warning</a>
						<a href="#" class="btn btn-danger">Danger</a>
						<a href="#" class="btn btn-link">Link</a>
					</div>
				</div>
			</div>
	6.2 Refer to http://bootswatch.com/paper for a demo of the theme
	6.3 Restart server (no need to manually restart if you are using nodemon) and go to Go to http://localhost:1337
		6.3.1 If you get errors like "Bootstrap's javascript requires jquery...", run the script below before starting the server
			> grunt clean

[AngularJS]
1. Download Angular - https://angularjs.org (v1.5.x)
	1.1 Download the "minified" build (angular.min.js)
	1.2 Copy "angular.min.js" into the "ZeroToAngularSailsTDD/assets/js/dependencies/" folder
2. Test Angular.
	2.1 Replace content of "ZeroToAngularSailsTDD/views/homepage.ejs" with:
		// Angular demo

[Static Front-end]
1. Add a file "index.html" in "ZeroToAngularSailsTDD/assets" folder, with the following content:
	// HTML Content
2. Remove (or comment out) the following line in "ZeroToAngularSailsTDD/config/routes.js":
	'/': {
		view: 'homepage'
	}
3. Delete "homepage.ejs" from "ZeroToAngularSailsTDD/views"

[GIT]
1. Download and install GIT - https://git-scm.com/download/win 

[Notes]
1. Environment used was Windows 7, but this should work on higher versions of Windows.