import { Config } from '@jest/types';

const config: Config.InitialOptions = {
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
	moduleFileExtensions: ['ts', 'js'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testMatch: ['**/test/**/*.test.(ts|js)'],
	testEnvironment: 'node',
	moduleNameMapper: {
		'@controller/(.*)': '<rootDir>/src/controller/$1',
		'@service/(.*)': '<rootDir>/src/service/$1',
		'@repository/(.*)': '<rootDir>/src/repository/$1',
		'@dto/(.*)': '<rootDir>/src/dto/$1',
		'@dao/(.*)': '<rootDir>/src/dao/$1',
		'@util/(.*)': '<rootDir>/src/util/$1',
	},
	setupFiles: ['./jest.setup.js'],
};

export default config;
