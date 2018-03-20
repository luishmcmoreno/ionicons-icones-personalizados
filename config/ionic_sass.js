var copyDefaultConfig = require('@ionic/app-scripts/config/sass.config.js');

copyDefaultConfig.includePaths.push('ionicons-3.0/dist/scss');

module.exports = function () {
  return copyDefaultConfig;
};