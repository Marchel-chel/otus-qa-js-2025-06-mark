module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: 'reports/jest-report.html',
        includeFailureMsg: true,
        includeConsoleLog: true,
        theme: 'lightTheme'
      }
    ]
  ]
}
