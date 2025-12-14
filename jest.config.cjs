module.exports = {
  testEnvironment: 'node',
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
