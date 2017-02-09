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
1. Download Angular - https://angularjs.org (v1.6.x)
	1. Download the "minified" build (angular.min.js)
	2. Copy "angular.min.js" into the "ZeroToAngularSailsTDD/assets/js/dependencies/" folder
2. Test Angular.
	- Replace content of "ZeroToAngularSailsTDD/views/homepage.ejs" with:
  ```
  <div class="container" ng-app>
      <br />
      <div class="panel panel-success">
          <div class="panel-heading">
              <h3 class="panel-title">Panel Title - Green (Success)</h3>
          </div>
          <div class="panel-body">
              <label>Name:</label>
              <input type="text" ng-model="yourName" placeholder="Enter a name here">
              <hr>
              <h1>Hello {{yourName}}!</h1>

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

# Static Front-end
1. Add a file "index.html" in "ZeroToAngularSailsTDD/assets" folder, with the following content:
  - Refer to https://github.com/blackzky/ZeroToAngularSailsTDD/blob/master/assets/index.html
2. Update route config
  - Remove (or comment out) the following line in "ZeroToAngularSailsTDD/config/routes.js":
  ```
  '/': {
    view: 'homepage'
  }
  ```
3. Delete "homepage.ejs" from "ZeroToAngularSailsTDD/views"

# GIT
Download and install GIT - https://git-scm.com/download/win 

# TDD Setup: Initial Setup
1. Create a 'test' folder in the root directory.
2. Create a 'client' and 'server' folder.
3. Create the following folders under test/client:
    - E2E/
    - lib/
    - Unit/

# TDD Setup: Client Unit Test - Karma (and Jasmine) Setup
Required: Perform "TDD Setup: Initial Setup" first
1. Go to https://code.angularjs.org/1.6.1/ and download "angular-mocks.js"
2. Paste "angular-mocks.js" under test/client/lib
3. Add Karma npm modules
    ```
    $ npm install karma karma-jasmine jasmine-core karma-chrome-launcher --save-dev
    $ npm install -g karma-cli
    ```
4. Change directory to "test/client/" and run Karma config (after installation in #3 has completed)
    ```
    $ karma init
    
    - Which testing framework do you want to use ?
    -> jasmine

    - Do you want to use Require.js ?
    -> no

    - Do you want to capture any browsers automatically ?
    -> Chrome

    - What is the location of your source and test files ?
    -> assets/js/dependencies/angular.min.js
    -> test/client/lib/angular-mocks.js
    -> assets/js/app/**/*.js            
    -> test/client/unit/**/*.spec.jss

    - Should any of the files included by the previous patterns be excluded ?
    -> <Enter>

    - Do you want Karma to watch all the files and run the tests on change ?
    -> yes
    ```
    > You can modify this config later in "test/client/karma.conf.js"
5. Add HTML reporter
    ```
    $ npm install karma-jasmine-html-reporter --save-dev
    ```
6. Update karma config:
    ```
    module.exports = function(config) {
      config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        // [IMPORTANT] Since our config file is in "./test/client/karma.conf.js" we need to map our base path properly
        basePath: '../../',
        ...
        reporters: ['kjhtml']
        ...
      })
    };
    ```
7. Update package.json to add script for Unit test
    ```
    ...
    "scripts": {
      "debug": "node debug app.js",
      "start": "node app.js",
      "test": "karma start ./test/client/karma.conf.js",
    }
    ...
    ```
8. Create sample test file (test/client/unit/sample/sample.spec.js)
    ```
    /* jshint esversion: 6 */
    (() => {
      'use strict';

      describe('Sample Suite ', () => {
          var $controller;

          beforeEach(module('SampleApp'));
          beforeEach(inject(($injector) => {
              $controller = $injector.get('$controller');
          }));


          it('show show that 1 + 1 = 2', () => {
              var SampleCtrl = $controller('SampleCtrl', { $scope: {} });

              var sum = SampleCtrl.Add(1, 1);
              expect(sum).toEqual(2);
          });
      });
    })();
    ```
9. Create a sample Angular module (assets/js/app/sample/sample.js)
    ```
    /* jshint esversion: 6 */
    (() => {
        'use strict';

        angular.module('SampleApp', [])
            .controller('SampleCtrl', function() {
                var vm = this;

                // CODE HERE

                return vm;
            });
    })();
    ```
10. Run Unit test - First failed test
    ```
    $ npm test
    ```
    > A new chrome window should pop-up. Click "Debug" to view the HTML reporter. CTRL+C to stop Unit test server.
    > The test should fail.
    
    ```
    TypeError: SampleCtrl.Add is not a function
    ```
11. Update code file again to pass the test(assets/js/app/sample/sample.js)
    ```
    /* jshint esversion: 6 */

    (() => {
        'use strict';

        angular.module('SampleApp', [])
            .controller('SampleCtrl', function() {
                var vm = this;

                vm.Add = Add;

                function Add(x, y) {
                    return x + y;
                }

                return vm;
            });
    })();
    ```
    > Save the file and refresh the HTML reporter. Test should now pass.

# Notes
1. Environment used was Windows.

# References
- Sails JS - http://sailsjs.com/
- Angular JS - https://www.angularjs.org/
- Bootstrap - http://getbootstrap.com/
- Bootstrap Theme (Paper) - http://bootswatch.com/paper/
- TDD
  - [TDD basics with angular and jasmine](http://www.slideshare.net/iquark/tdd-basics-with-angular-and-jasmine)
  - [Unit testing best practices angularjs](http://andyshora.com/unit-testing-best-practices-angularjs.html)
  - [Front end javascript/introduction to angular test driven development](https://www.pluralsight.com/guides/front-end-javascript/introduction-to-angular-test-driven-development)
  - [Testing angularjs with jasmine and karma part 1](https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1)
  - [Testing angularjs with jasmine and karma-part 2](https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-2)
  - [Karma-Jasmine HTML Reporter NPM](https://www.npmjs.com/package/karma-jasmine-html-reporter)

# Common issues
- [Spec Failure] TypeError: Function.prototype.bind.apply(...) is not a constructor
- Controllers should be instantiable (i.e. called with new), so things like arrow functions is not supported
- [Link](https://github.com/angular/angular.js/issues/14814)