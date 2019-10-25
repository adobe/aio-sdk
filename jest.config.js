module.exports = {
  collectCoverage: true,
  verbose: false,
  collectCoverageFrom: ['src/*.js'],
  testRegex: '/test/[^/]*.js$',
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      lines: 100,
      branches: 100,
      statements: 100
    }
  }
}
