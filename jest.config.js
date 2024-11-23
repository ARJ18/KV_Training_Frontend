/* eslint-disable no-undef */
module.exports = async () => ({
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identitiy-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
});
