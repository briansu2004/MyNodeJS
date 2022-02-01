const { tagGroupData } = require('./mock/tagGroupDataJson');

// tagGroupData.forEach((e) => {
//   console.log(e.extendedParameters);

//   console.log(Object.keys(e.extendedParameters));

//   console.log(Object.values(e.extendedParameters));
// });

// tagGroupData.forEach((e) => {
//   // eslint-disable-next-line prettier/prettier
//   Object.keys(e.extendedParameters).forEach((k) =>
//     console.log(`${e.name}: ${k} -> ${e.extendedParameters[k]}`)
//   );
// });

const tgNew = tagGroupData.filter((e) => e.extendedParameters1 !== undefined);

tgNew.forEach((e) => console.log(e));

console.log(tgNew === undefined);
console.log(tgNew);
console.log(tgNew.length === 0);
