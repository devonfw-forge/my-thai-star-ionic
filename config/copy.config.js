// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
  copyFlagCss: {
    src: ['{{ROOT}}/node_modules/flag-icon-css/css/flag-icon.min.css'],
    dest: '{{WWW}}/assets/styles',
  },

  copyFlags: {
    src: ['{{ROOT}}/node_modules/flag-icon-css/flags/**/*'],
    dest: '{{WWW}}/assets/flags',
  },

  copyDatePickerCss: {
    src: ['{{ROOT}}/node_modules/ng-pick-datetime/assets/style/*'],
    dest: '{{WWW}}/assets/styles',
  },
  copyCovalentPlatformCss: {
    src: ['{{ROOT}}/node_modules/@covalent/core/common/platform.css'],
    dest: '{{WWW}}/assets/styles',
  },

  copyIndexContent: {
    src: [
      '{{SRC}}/index.html',
      '{{SRC}}/manifest.json',
      '{{SRC}}/service-worker.js',
    ],
    dest: '{{WWW}}',
  },
  copyFonts: {
    src: [
      '{{ROOT}}/node_modules/ionicons/dist/fonts/**/*',
      '{{ROOT}}/node_modules/ionic-angular/fonts/**/*',
    ],
    dest: '{{WWW}}/assets/fonts',
  },
  copyPolyfills: {
    src: [
      `{{ROOT}}/node_modules/ionic-angular/polyfills/${
        process.env.IONIC_POLYFILL_FILE_NAME
      }`,
    ],
    dest: '{{BUILD}}',
  },
  copySwToolbox: {
    src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
    dest: '{{BUILD}}',
  },
  copyAssets: {
    src: ['{{SRC}}/assets/**/*'],
    dest: '{{WWW}}/assets',
  },
};
