/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "node",
  // collectCoverage: true,
  collectCoverageFrom: ["./app/**/*.ts"],
  setupFiles: ["dotenv/config"],
  detectOpenHandles: true,
  coveragePathIgnorePatterns: [
    "./app/index.ts",
    "./app/config/*.ts",
    "./app/controllers/models/*.ts",
    "./app/repositorys/entities/*.ts",
    "./app/common/constants.ts",
  ],
};
