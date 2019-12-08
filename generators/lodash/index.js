var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installingLodash() {
    const pkgJson = {
        name:'kevin',
        devDependencies: {
          eslint: '^3.15.0'
        }
      };
  
      // Extend or create package.json file in destination path
      this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    // this.log("initializando lodash");
    // this.npmInstall(["lodash"], { "save-dev": true });
  }
};
