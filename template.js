/*
 * grunt-init-qunit
 * https://gruntjs.com/
 *
 * Copyright (c) 2015 Bertold von Dormilich
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a QUnit test for JavaScript.';

// Template-specific notes to be displayed before question prompts.
// exports.notes = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {

  init.process({type: 'jquery'}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title', function (value, data, done) {
      // Fix jQuery capitalization.
      value = value.replace(/jquery/gi, 'jQuery');
      done(null, value);
    }),
    init.prompt('description', 'My awesome JavaScript.'),
    init.prompt('version'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function (err, props) {
    // A few additional properties.
    props.keywords = [];

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', {
      name: 'javascript-qunit',
      version: '0.0.0-ignored',
      npm_test: 'grunt qunit',
      node_version: '>= 0.10.0',
      devDependencies: {
        "grunt-contrib-clean": "~0.6.0",
        "grunt-contrib-concat": "~0.5.0",
        "grunt-contrib-jshint": "~0.11.0",
        "grunt-contrib-qunit": "~0.7.0",
        "grunt-contrib-uglify": "~0.9.0",
        "grunt-contrib-watch": "~0.6.0",
        "qunit-assert-close": "^1.1.2"
      },
    });

    // All done!
    done();
  });

};