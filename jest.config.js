
module.exports = {
  preset: "jest-preset-angular",
  transform: {
    "^.+\\.(ts|js|html)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [
        "<rootDir>/node_modules/jest-preset-angular/build/InlineFilesTransformer",
        "<rootDir>/node_modules/jest-preset-angular/build/StripStylesTransformer",
      ],
    },
  },
};
