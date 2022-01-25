const _ = require("lodash");

const { tagData } = require("./mock/tagData");
//console.log(tagData);
// console.log(tagData[0]);
console.log(typeof tagData);
console.log(tagData instanceof Array);

/*{
  UCAR_TV_LSM_102: [
    'UCAR_TV_LSM_102_Gold',
    'UCAR_TV_LSM_102_Silver',
    'UCAR_TV_LSM_102_Bronze'
  ],
  UCAR_TV_LSM_103: [
    'UCAR_TV_LSM_103_[0-10]',
    'UCAR_TV_LSM_103_[10-50]',
    'UCAR_TV_LSM_103_[50-100]'
  ],
  UCAR_TV_LSM_104: [
    'UCAR_TV_LSM_104_[0-3]',
    'UCAR_TV_LSM_104_[3-88]',
    'UCAR_TV_LSM_104_[70]'
  ]
}
*/
// const groupBy1 = (key, arr) =>
//   arr.reduce((cache, tag) => {
//     const tg = tag.tagGroupReference;
//     if (tg in cache) {
//       return { ...cache, [tg]: cache[tg].concat(tag.name) };
//     }
//     return { ...cache, [tg]: [tag.name] };
//   }, {});
//console.log(groupBy1("tagGroupReference", tagData));

const groupBy = (key, arr) =>
  arr.reduce((cache, tag) => {
    const tg = tag.tagGroupReference;
    if (tg in cache) {
      return { ...cache, [tg]: cache[tg].concat(tag.name) };
    }
    return { ...cache, [tg]: [tag.name] };
  }, {});

const output = groupBy("tagGroupReference", tagData);
console.log(output);
console.log(typeof output);
console.log(output instanceof Array);
console.log(output instanceof Map);
//console.log(output instanceof );
//console.log(_(output).toPairs().value());
console.log(output.UCAR_TV_LSM_102);
console.log(typeof output.UCAR_TV_LSM_102);
console.log(output.UCAR_TV_LSM_102 instanceof Array);

for (tagGroup in output) {
  console.log(tagGroup);
  //console.log(output[tagGroup]);
  console.log(output[tagGroup].toString());
}
//output.map((tg, t) => console.log(tg));

output.forEach;
