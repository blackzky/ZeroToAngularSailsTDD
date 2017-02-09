// Run the e2e test using:
// $ protractor ./test/protractor.conf.js

// [Important] Selenium server must be running already
// $ webdriver-manager start


exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['E2E/**/*.spec.js']
};