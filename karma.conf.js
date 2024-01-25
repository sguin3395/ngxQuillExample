// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const { join } = require('path');
const { constants } = require('karma');

module.exports = () => {
  return {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-teamcity-reporter'),
      require('karma-ie-launcher'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage')
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        random: false,
        verboseDeprecations: true,
      }
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    coverageIstanbulReporter: {
      dir: join(__dirname, '../../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },   
    junitReporter: {
      outputDir: 'test_results', // results will be saved as $outputDir/$browserName.xml
      useBrowserName: false, // add browser name to report and classes names
      outputFile: 'test-report.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
    },
    reporters: ['progress', 'kjhtml', 'junit', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: constants.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    /**
     * When Karma is watching the files for changes, it will delay a new run until the current run is finished. 
     * Enabling this setting will cancel the current run and start a new run immediately when a change is detected.     
     */
    restartOnFileChange: true,
    captureTimeout: 1200000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 1,
    browserNoActivityTimeout: 60000, //by default 10000 
  };
};