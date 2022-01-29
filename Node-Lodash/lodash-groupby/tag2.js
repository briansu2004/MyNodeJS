//const _ = require("lodash");
const { tagData } = require('./mock/tagData');
// console.log(typeof tagData);     //object
console.log(tagData instanceof Array); //true

/*
  {
    name: '[UCAR]_[TV_LSM_102]_[Gold]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_102]',
    createdTimestamp: '2021-08-16T14:52:09.771317Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    createdUser: 'peterw',
  },
  {
    name: '[UCAR]_[TV_LSM_102]_[Silver]',
    type: 'Tag',
    tagGroupReference: '[UCAR]_[TV_LSM_102]',
    createdTimestamp: '2021-08-12T17:52:35.863886Z',
    createdUserId: 'd1c0ba8b-6403-4dbc-ad91-95308d0d5279',
    createdUser: 'peterw',
  },
=>
  {
    key: 'UCARModelToTag:[UCAR]_[TV_LSM_102]',
    value: ['[UCAR]_[TV_LSM_102]_[Gold]', '[UCAR]_[TV_LSM_102]_[Silver]', '[UCAR]_[TV_LSM_102]_[Bronze]'],
  },
*/
// const groupBy1 = (key, arr) =>
//   arr.reduce((cache, tag) => {
//     const tg = tag[key];
//     if (tg in cache) {
//       return { ...cache, [tg]: cache[tg].concat(tag.name) };
//     }
//     return { ...cache, [tg]: [tag.name] };
//   }, {});

const groupBy = (key, arr) =>
  arr.reduce((cache, tag) => {
    const tg = tag[key];
    if (tg in cache) {
      return { ...cache, [tg]: cache[tg].concat(tag.name) };
    }
    return { ...cache, [tg]: [tag.name] };
  }, {});

const output = groupBy('tagGroupReference', tagData);
console.log(output);
// console.log(typeof output);    //object
// console.log(output instanceof Array);  //false
// console.log(output instanceof Map);    //false
// console.log(output instanceof );
// console.log(_(output).toPairs().value());
// -      //undefined
// console.log(typeof output.UCAR_TV_LSM_102); //undefined

/*
console.log(output instanceof Array); //false
console.log(output['[UCAR]_[TV_LSM_102]']); // good format
console.log(output['[UCAR]_[TV_LSM_102]'] instanceof Array); //true!

for (tagGroup in output) {
  console.log(`tagGroup: ${tagGroup}`);
  console.log(output[tagGroup]);
}
*/

//output.map((t) => console.log(tg));

// tagGrouped = [{ key: '', value: '' }];
// tagData.forEach((t) => {
//   if (t.tagGroupReference in tagGrouped.key) {
//     tagGrouped[t.name] = tagGrouped[t.name].concat(t.name);
//   } else {
//     tagGrouped[t.tagGroupReference] = t.name;
//   }
// });

// tagGrouped = [];
// console.log(tagGrouped.entries());
// tagGrouped = [
//   {
//     key: 'UCARModelToTag:[UCAR]_[TV_LSM_102]',
//     value: [
//       '[UCAR]_[TV_LSM_102]_[Gold]',
//       '[UCAR]_[TV_LSM_102]_[Silver]',
//       '[UCAR]_[TV_LSM_102]_[Bronze]',
//     ],
//   },
// ];
// console.log(
//   tagGrouped.find(
//     (element) => element.key === 'UCARModelToTag:[UCAR]_[TV_LSM_102]'
//   )
// );
// console.log(
//   tagGrouped.find(
//     (element) => element.key === 'UCARModelToTag:[UCAR]_[TV_LSM_103]'
//   )
// );

tagGrouped = [];

tagData.map((t) => {
  console.log(`t: ${t.tagGroupReference} | ${t.name}`);

  //console.log(t);
  //tagGrouped.find((e) => e.key === t.tagGroupReference)
  //words.filter(word => word.length > 16);
  const tf = tagGrouped.filter((e) => e.key === t.tagGroupReference);
  // console.log(
  //   `t.tagGroupReference: ${t.tagGroupReference}, tf.length: ${tf.length}`
  // );

  if (tf.length > 0) {
    console.log('found');

    //tf.value = tf.value + ',' + t.name;
    tagGrouped
      .filter((e) => e.key === t.tagGroupReference)
      .forEach((e) => (e.value = e.value.concat(t.name)));
    //.forEach((e) => (e.value = [e.value].push(t.name)));

    // tagGrouped.map((x) => {
    //   console.log(`x: ${x.key} | ${x.value}`);

    //   x.key === t.tagGroupReference
    //     ? //? (x = { key: x.key, value: x.value.concat(t.name) })
    //       { ...x, value: x.value.concat(t.name) }
    //     : x;
    // });
  } else {
    console.log('not found');
    tagGrouped.push({ key: t.tagGroupReference, value: [t.name] });
  }
});

//const updatedData = originalData.map(x => (x.id === id ? { ...x, updatedField: 1 } : x));
//tagGrouped = tagData.map(x => (x.key === t.tagGroupReference) ? { ...x, updatedField: 1 } : x);

console.log('tagGrouped: ');
tagGrouped.map((t) => {
  console.log(t);
});
