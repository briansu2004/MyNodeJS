const { tagGroupData } = require('./mock/tagData');

tagGroupData.forEach((e) => {
  console.log(e.extendedParameters);

  console.log(Object.keys(e.extendedParameters));

  console.log(Object.values(e.extendedParameters));
});

tagGroupData.forEach((e) => {
  Object.keys(e.extendedParameters).forEach((k) =>
    console.log(`${e.name}: ${k} -> ${e.extendedParameters[k]}`)
  );
});
