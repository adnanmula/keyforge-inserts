'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const sass = require('sass'); // <-- ADD THIS

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    'ember-cli-foundation-6-sass': {
      'foundationJs': 'all'
    },
    fingerprint: {
      extensions: ['js', 'css']
    },
    sassOptions: {
      implementation: sass,
      includePaths: [
        'node_modules/foundation-sites/scss'
      ]
    }

  });

  return app.toTree();
};
