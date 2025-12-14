module.exports = {
  testEnvironment: 'node',
  testTimeout: 20000,
  testPathIgnorePatterns: ['/node_modules/', '/e2e/', '/tests-examples/'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: 'reports/jest-report.html',
        includeFailureMsg: true,
        includeConsoleLog: true
      }
    ]
  ]
}
