// eslint-disable-next-line no-undef
module.exports = {
	roots: ['<rootDir>/src'],
	testEnvironment: 'node',
	transform: {
		'.+\\.ts$': 'ts-jest',
	},
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
	},
}
