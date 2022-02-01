const { tagGroups, tags } = require('./mock/data');

// const tgNew = tagData.filter((e) => e.tagGroupReference in );
// tgNew.forEach((e) => console.log(e));

// console.log(`Type of tagGroups is: ${typeof tagGroups}`);
// console.log(`Type of tagGroups.name is: ${typeof tagGroups.name}`); // undefined
// console.log(`Object.values(tagGroups) is: ${Object.values(tagGroups)}`);
// console.log(
//   `Type of Object.values(tagGroups) is: ${typeof Object.values(tagGroups)}`
// );
// console.log(
//   `Object.values(tagGroups) is array? ${Array.isArray(
//     Object.values(tagGroups)
//   )}`
// );

Object.values(tagGroups).forEach((e) =>
  console.log(`tagGroups name: ${e.name}`)
);

Object.values(tags).forEach((e) =>
  console.log(`tag: name -> ${e.name}, group -> ${e.tagGroupReference}`)
);

// undefined
// console.log(
//   `Object.values(tagGroups).name is ${Object.values(tagGroups).name}`
// );
// console.log(
//   `Type of Object.values(tagGroups).name is: ${typeof Object.values(tagGroups)
//     .name}`
// );

// console.log(
//   `Object.values(tagGroups).name is array? ${Array.isArray(
//     Object.values(tagGroups).name
//   )}`
// );

// tagsFiltered = tags.filter(
//   (e) =>
//     e.type !== undefined &&
//     e.type.toUpperCase() === 'TAG' &&
//     Object.values(tagGroups).tagGroupReference.includes(e.name)
// );

// const tagsFiltered = tags.filter(function(t) {
//   //return tagGroups.filter((tg) => tg.name === t.tagGroupReference);
//   tagGroups.filter((tg) => tg.name === t.tagGroupReference);
// });

//tagGroups.forEach((tg) => console.log(`tag group: ${tg.name}`));
//tagGroups.filter()

// const tagsFiltered = [];
// tags.forEach((t) => {
//   //console.log(`Checking ${t.tagGroupReference}`);
//   if (tagGroups.includes(t.tagGroupReference)) {
//     tagsFiltered.push(t);
//   }
// });

// tagsFiltered.forEach((e) =>
//   console.log(`Filtered tags: ${e.name} in group ${e.tagGroupReference}`)
// );

//console.log(tagGroups.indexOf);

//Type of tagGroups is: object
//Object.values(tagGroups) is array? true

// current: tags
// other: tagGroups
function comparer(otherArray) {
  return function(current) {
    return (
      otherArray.filter(function(other) {
        return other.name == current.tagGroupReference;
      }).length == 0
    );
  };
}

// const onlyInTagGroups = tagGroups.filter(comparer(tags));
// onlyInTagGroups.forEach((e) =>
//   console.log(`Filtered tag groups: ${e.name} in group ${e.tagGroupReference}`)
// );

function comparer2(otherArray) {
  return function(current) {
    return (
      otherArray.filter(function(other) {
        return other.tagGroupReference == current.name;
      }).length == 0
    );
  };
}

function comparerTagGroup(tagGroups) {
  return function(tag) {
    return (
      tagGroups.filter(function(tagGroup) {
        return tagGroup.name == tag.tagGroupReference;
      }).length > 0
    );
  };
}

const tagsFiltered = tags.filter(comparerTagGroup(tagGroups));
tagsFiltered.forEach((e) =>
  console.log(`Filtered tags: ${e.name} in group ${e.tagGroupReference}`)
);
