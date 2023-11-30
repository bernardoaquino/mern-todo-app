
export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.(ts|tsx)?$': 'babel-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
      '^.+\\.svg$': 'jest-transform-stub'
    // process `*.tsx` files with `ts-jest`
    },
    collectCoverage: true,
    coverageReporters: ['json', 'html'],
    // collectCoverageFrom: ['**/index.tsx'],
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
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],}