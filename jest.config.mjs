export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: { '^.+\\.tsx?$': ['ts-jest', { useESM: true, tsconfig: { isolatedModules: true } }] },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
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
