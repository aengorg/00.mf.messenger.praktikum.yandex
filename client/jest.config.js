module.exports = {
  rootDir: './source/',
  moduleNameMapper: {
    '(.*)\\.js': '$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  // testPathIgnorePatterns: ['/node_modules/', '/tmp/'],
};
