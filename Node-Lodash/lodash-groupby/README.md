# Node Loadsh GroupBy


## lodash groupBy doc


## Commands

```dos
npm init -y
npm i lodash
npm i -S nodemon
nodemon app.js
```

## Output

```javascript
const array = [
  { id: 1, marks: 90, name: "a" },
  { id: 2, marks: 70, name: "b" },
  { id: 3, marks: 90, name: "c" },
  { id: 4, marks: 90, name: "d" },
  { id: 5, marks: 80, name: "e" },
];

const output = _.groupBy(array, "marks");

console.log("Output of groupBy is: ", output);
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
