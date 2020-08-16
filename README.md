# AngularJestSampleAuto

這裡使用工具 [@briebug/jest-schematic](https://github.com/briebug/jest-schematic) 自動加入 jest 單元測試框架支援。

步驟如下：

在專案目錄下，執行 `ng add @briebug/jest-schematic` 安裝工具套件

然後執行以下指令，自動將 jest 加入到專案中

```
ng g @briebug/jest-schematic:add
```

安裝完成後，可以執行 `npm test` 運行測試，看看是否正常。
以下為參考執行結果。

```
ts-jest[config] (WARN) The configuration for astTransformers as string[] is deprecated and will be removed in ts-jest 27. Please define your custom AST transformers in a form of an object. More information you can check online documentation https://kulshekhar.github.io/ts-jest/user/config/astTransformers
 PASS  src/app/app.component.spec.ts
  AppComponent
    √ should create the app (151 ms)
    √ should have as title 'angular-jest-sample-auto' (89 ms)
    √ should render title (119 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.012 s
Ran all test suites.
```

jest-schematic 工具所產生的 jest 設定，預設會放在 package.json 檔案內，但一般而言，我們會將 jest 設定獨立放在預設的 `jest.config.js` 檔案內。因此，可以將 package.json `jest:` 區塊內容刪除（可以參考 git 版本異動，查看細節），並手動建立 `jest.config.js` ：

```js
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
```

修改完後，再執行一次 `npm test`
若結果執行正常，安裝就算是順利完成，可以開始用 jest 進行 angular 單元測試練習了。 `^o^`

NOTE: 手動執行這些步驟，也差不多只需要 2~3 分鐘。可以參考這篇說明： [How to Set Up Angular Unit Testing with Jest](https://www.amadousall.com/how-to-set-up-angular-unit-testing-with-jest/)
或是這一篇 [jest-angular-example](https://github.com/wtho/jest-angular-example)

---

這個專案是由 [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0 所建立.

產生專案

```
ng new angular-jest-sample-auto
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
