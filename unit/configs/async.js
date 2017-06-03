/**
 * Async tests
 */

module.exports = {
  name: 'async',

  generate: {
    filesCount: 50,
    nestedSuites: [0, 1],
    delay: [0, '0-10'],
    hooks: [0, 0.5, 1],
    testsInSuite: 5,
    suitesInSuite: 2,
    fn: 'asyncFn',
  },

  run: [
    {runner: 'mocha', cmd: 'mocha {path}'},
    {runner: 'jasmine', cmd: 'jasmine JASMINE_CONFIG_PATH=temp/jasmine.json'},
    {runner: 'mocha.parallel', cmd: 'mocha {path}'},
    {runner: 'mocha-parallel-tests', cmd: 'mocha-parallel-tests {path}'},
    {runner: 'ava', cmd: 'ava {path}'},
    {runner: 'tape', cmd: 'tape {path}/*.js'},
    {runner: 'jest', cmd: 'jest {path}'},
  ]
};
