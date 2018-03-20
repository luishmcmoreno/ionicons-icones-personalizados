var copyDefaultConfig = require('@ionic/app-scripts/config/copy.config.js');

copyDefaultConfig.copyFonts.src = ['{{ROOT}}/node_modules/ionic-angular/fonts/**/*', '{{ROOT}}/ionicons-3.0/dist/fonts/**/*'];

module.exports = function () {
  return copyDefaultConfig;
};