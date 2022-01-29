# Node Loadsh GroupBy

## lodash groupBy doc

## Commands

```dos
.eslint.yml
.prettierrc.yml
```

```dos
npm init -y
npm i lodash
npm i -S nodemon prettier eslint
npm i -S eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier husky
npm init @eslint/config
nodemon app.js
```

```dos
  "devDependencies": {
    "eslint": "^5.15.1",
    "eslint-config-airbnb": "^17.1.0",
    "eslint-config-prettier": "^4.0.0",
    "eslint-plugin-import": "^2.16.0",
    "eslint-plugin-jest": "^22.3.2",
    "eslint-plugin-jsx-a11y": "^6.2.1",
    "eslint-plugin-prettier": "^3.0.1",
    "eslint-plugin-react": "^7.4.0",
    "husky": "^4.2.0",
    "jest": "^24.5.0",
    "lint-staged": "^9.5.0",
    "nodemon": "^1.18.10",
    "prettier": "^1.16.4"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
```

```dos
C:\Code\MyNodeJS\Node-Lodash\lodash-groupby>npm init @eslint/config
Need to install the following packages:
  @eslint/create-config
Ok to proceed? (y) y
? How would you like to use ESLint? ...
  To check syntax only
> To check syntax and find problems
  To check syntax, find problems, and enforce code style
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JavaScript
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint@latest
√ Would you like to install them now with npm? · No / Yes
Installing eslint@latest
npm WARN idealTree Removing dependencies.eslint in favor of devDependencies.eslint

up to date, audited 189 packages in 2s

26 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
A config file was generated, but the config file itself may not follow your linting rules.
Successfully created .eslintrc.js file in C:\Code\MyNodeJS\Node-Lodash\lodash-groupby
```

```dos
C:\Code\MyNodeJS\Node-Lodash\lodash-groupby>npm init @eslint/config
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · airbnb
√ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2
√ Would you like to install them now with npm? · No / Yes
Installing eslint-config-airbnb-base@latest, eslint@^7.32.0 || ^8.2.0, eslint-plugin-import@^2.25.2

added 58 packages, changed 1 package, and audited 247 packages in 5s

58 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created .eslintrc.json file in C:\Code\MyNodeJS\Node-Lodash\lodash-groupby
```

## Output

```javascript
const array = [
  { id: 1, marks: 90, name: 'a' },
  { id: 2, marks: 70, name: 'b' },
  { id: 3, marks: 90, name: 'c' },
  { id: 4, marks: 90, name: 'd' },
  { id: 5, marks: 80, name: 'e' },
];

const output = _.groupBy(array, 'marks');

console.log('Output of groupBy is: ', output);
```

```dos
Output of groupBy is:  {
  '70': [ { id: 2, marks: 70, name: 'b' } ],
  '80': [ { id: 5, marks: 80, name: 'e' } ],
  '90': [
    { id: 1, marks: 90, name: 'a' },
    { id: 3, marks: 90, name: 'c' },
    { id: 4, marks: 90, name: 'd' }
  ]
}
```

## Loadsh \_.map() vs ES6 [].map()

## Other useful lodash functions

times

omit

compact

difference

## With Reduce

![](image/README/reduce_01.png)

![](image/README/reduce_02.png)

## ESLint fix

```dos
tagData.forEach((t) => {
  if (
    tagGrouped.find((e) => e.key === prefix + t.tagGroupReference) === undefined
  ) {
    tagGrouped.push({ key: prefix + t.tagGroupReference, value: [t.name] });
  } else {
    tagGrouped[
      tagGrouped.findIndex((e) => e.key === prefix + t.tagGroupReference)
    ].value = tagGrouped[
      tagGrouped.findIndex((e) => e.key === prefix + t.tagGroupReference)
    ].value.concat(t.name);
  }
```

```dos
C:\Code\MyNodeJS\Node-Lodash\lodash-groupby\tag.js
  31:7   error  Replace `␍⏎····tagGrouped.find((e)·=>·e.key·===·prefix·+·t.tagGroupReference)·===·undefined␍⏎··` with `tagGrouped.find((e)·=>·e.key·===·prefix·+·t.tagGroupReference)·===·undefined`  prettier/prettier
  36:16  error  Replace `␍⏎······tagGrouped.findIndex((e)·=>·e.key·===·prefix·+·t.tagGroupReference)␍⏎····` with `tagGrouped.findIndex((e)·=>·e.key·===·prefix·+·t.tagGroupReference)`                prettier/prettier

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.

```

=>

```dos
  if (tagGrouped.find((e) => e.key === prefix + t.tagGroupReference) === undefined) {
    tagGrouped.push({ key: prefix + t.tagGroupReference, value: [t.name] });
  } else {
    tagGrouped[tagGrouped.findIndex((e) => e.key === prefix + t.tagGroupReference)].value = tagGrouped[
      tagGrouped.findIndex((e) => e.key === prefix + t.tagGroupReference)
    ].value.concat(t.name);
  }
```

```dos
C:\Code\MyNodeJS\Node-Lodash\lodash-groupby>npm run lint1

> lodash-groupby@1.0.0 lint1
> eslint "tag.js"
```
