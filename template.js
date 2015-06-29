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
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description', 'My awesome JavaScript.'),
    init.prompt('version'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email')
  ], function (err, props) {
    // A few additional properties.
    props.keywords = ['javascript', 'qunit'];
    props.npm_test = 'grunt qunit';
    props.devDependencies = {
      'grunt-contrib-clean': '~0.6.0',
      'grunt-contrib-concat': '~0.5.0',
      'grunt-contrib-jshint': '~0.11.0',
      'grunt-contrib-qunit': '~0.7.0',
      'grunt-contrib-uglify': '~0.9.0',
      'grunt-contrib-watch': '~0.6.0',
      'qunit-assert-close': '^1.1.2'
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // Generate package.json file, used by npm and grunt.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });
};
