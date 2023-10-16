import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 
  testEnvironment: 'jest-environment-jsdom', 
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: ['**/index.tsx'],
  modulePathIgnorePatterns: ['containers', 'pages'],
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/$1',
    'atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    'molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    'organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    'containers/(.*)$': '<rootDir>/src/containers/$1',
    'hooks/(.*)$': '<rootDir>/src/hooks/$1',
    'pages/(.*)$': '<rootDir>/src/pages/$1',
    'public/(.*)$': '<rootDir>/public/$1',
    'providers/(.*)$': '<rootDir>/src/providers/$1',
    'types/(.*)$': '<rootDir>/src/types/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)