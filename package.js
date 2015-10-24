Package.describe({
  name: 'hydraorc:jpreloader',
  version: '1.0.2',
  // Brief, one-line summary of the package.
  summary: 'Preloading screen (aka. splash screen) for your website.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hydraorc/meteor-jpreloader.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('jquery');
  api.use('percolate:velocityjs@1.2.1_1');
  api.addFiles('lib/jpreloader.js', 'client');
  api.addFiles('lib/jpreloader.css', 'client');
});
