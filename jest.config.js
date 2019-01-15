/* eslint-disable max-len */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
// https://github.com/facebook/jest/blob/master/docs/Configuration.md

module.exports = {
  // This automatically clears mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '!src/**/*.{js,jsx}',
    '!public/*.{js}',
    '!src/index.jsx',
  ],

  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage-jest',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'html',
    'text',
    'lcov',
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  // moduleNameMapper: {
  //   '^.+\\.(css|less|scss)$': 'babel-jest'
  // },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/client/src/__mocks__/fileMocks.js',
  },

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.config.js', 'jest-localstorage-mock'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each individual test should be reported during the run
  verbose: false,

};
