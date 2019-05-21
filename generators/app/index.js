'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the luminous ${chalk.red('generator-react-express-postgres')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the project?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'dbname',
        message: 'What is the database name?',
        default: 'nyala'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      { 
        title: this.props.name,
        dbname: this.props.dbname
      }
    );
  
    const projectName = this.props.name.replace(/\s/ig, '-').toLowerCase()
    
    this.fs.copyTpl(
      this.templatePath('**/package.json'),
      this.destinationRoot(),
      { title: projectName }
    );

  }

  install() {
    this.installDependencies({bower: false});
  }
};
