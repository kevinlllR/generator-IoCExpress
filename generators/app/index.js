var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);

      }

      async input(){
      
            this.answers = await this.prompt([
              {
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname // Default to current folder name
              }
            ]);
            this.sourceRoot(`${this.sourceRoot()}/../../server/templates`)
            this.destinationRoot(`${this.destinationRoot()}/${this.answers.name}`)
            this.config.set('name',this.answers.name);
      }
      write(){
          this.fs.copy(
            this.templatePath('./**/*'),
            this.destinationPath(`./`),
            { globOptions: { dot: true } }
          )
      }
      initial(){
        this.composeWith(
             require.resolve('../packages')
        )
      }


};