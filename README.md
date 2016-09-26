# NodeJS Setup

1. Check version
```
$ node -v
$ npm -v
```
2. Download and install NodeJS from https://nodejs.org - v6.6.0 Current (~13mb)
3. Check version again (restart CMD)
```
$ node -v
$ npm -v
```

# Visual Studio Code
1. Download and install VS Code from http://code.visualstudio.com/ (~31mb)
	- Check all options
2. Install plugins (Optional)
	1. JS-CSS-HTML-formatter
	2. amVim
		- Set amVim.bindCtrlCommands to false to use CTRL bindings of VS Code
			1. In VS Code, press F1 and type "Open User Settings".
			2. Add this line: ``` "amVim.bindCtrlCommands": false ```

# Sail.js
1. Install Sails.js
  ```
  $ npm -g install sails
  ```
2. Create new Project
	- Make sure you are in the correct directory...
  ```
  $ cd C:\Projects
  ```
3. Create Sails Project
  - Enter the following commands
  ```
  $ sails new ZeroToAngularSailsTDD
  $ cd ZeroToAngularSailsTDD
  $ sails lift
  ```
4. Go to http://localhost:1337
5. Press CTRL+C to stop server
6. Read more in https://github.com/sails101

# nodemon
1. Install nodemon
```
$ npm install -g nodemon
```
2. Run sails project using nodemon
```
$ nodemon app
```

# grunt
1. Install grunt-cli for sails automation
```
$ npm install -g grunt-cli
```

# Bootstrap - Bootswatch Theme (Paper) and jQuery
1. Download bootstrap - https://getbootstrap.com (v3.3.7)
2. Extract "bootstrap-3.3.7-dist.zip"
3. Copy the files from the "bootstrap-3.3.7-dist" folder to "ZeroToAngularSailsTDD/assets" folder
  - [JS] "bootstrap-3.3.7-dist/js/bootstrap.min.js" -> "ZeroToAngularSailsTDD/assets/js/dependencies/bootstrap.min.js"
	- [FONTS] "bootstrap-3.3.7-dist/fonts" -> "ZeroToAngularSailsTDD/assets/fonts"
	- [CSS] Skip since we will use Paper theme
4. Download Bootswatch Paper Theme - http://bootswatch.com/paper/bootstrap.min.css
  - Save it in "ZeroToAngularSailsTDD/assets/styles"
5. Download jQuery - https://jquery.com/download (v3.1.0)
	1. Download the compressed, production jQuery 3.1.0
	2. Copy "jquery-3.1.0.min.js" into the "ZeroToAngularSailsTDD/assets/js/dependencies/" folder
	3. Ensure that sails loads jQuery first before bootstrap.min.js:
		- Modify "ZeroToAngularSailsTDD/tasks/pipeline.js":
    ```
    ...
    // Dependencies like jQuery, or Angular are brought in here
    'js/dependencies/jquery-3.1.0.min.js',
    'js/dependencies/**/*.js',
    ....
    ```			
6. Check if bootstrap and other components was properly added
	- Replace content of "ZeroToAngularSailsTDD/views/homepage.ejs" with:
  ```
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
  ```
	- Refer to http://bootswatch.com/paper for a demo of the theme
	- Restart server (no need to manually restart if you are using nodemon) and go to Go to http://localhost:1337
		- If you get errors like "Bootstrap's javascript requires jquery...", run the script below before starting the server
```
$ grunt clean
```

# AngularJS
1. Download Angular - https://angularjs.org (v1.5.x)
	1. Download the "minified" build (angular.min.js)
	2. Copy "angular.min.js" into the "ZeroToAngularSailsTDD/assets/js/dependencies/" folder
2. Test Angular.
	- Replace content of "ZeroToAngularSailsTDD/views/homepage.ejs" with:
  ```
  // Angular demo (code snipplet to be inserted here...)
  ```
# Static Front-end
1. Add a file "index.html" in "ZeroToAngularSailsTDD/assets" folder, with the following content:
	  ```
  // HTML Content (code snipplet to be inserted here...)
  ```
2. Remove (or comment out) the following line in "ZeroToAngularSailsTDD/config/routes.js":
```
'/': {
	view: 'homepage'
}
```
3. Delete "homepage.ejs" from "ZeroToAngularSailsTDD/views"

# GIT
Download and install GIT - https://git-scm.com/download/win 

# Notes
1. Environment used was Windows 7, but this should work on higher versions of Windows.
