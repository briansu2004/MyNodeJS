let _ = require("lodash");

const myArray = [
  { id: 1, marks: 90, name: "a" },
  { id: 2, marks: 70, name: "b" },
  { id: 3, marks: 90, name: "c" },
  { id: 4, marks: 90, name: "d" },
  { id: 5, marks: 80, name: "e" },
];

let output = _.groupBy(myArray, "marks");
console.log("Output of groupBy is: ", output);

// https://jsfiddle.net/thefourtheye/WYCF8

var data = [
  {
    name: "jim",
    color: "blue",
    age: "22",
  },
  {
    name: "Sam",
    color: "blue",
    age: "33",
  },
  {
    name: "eddie",
    color: "green",
    age: "77",
  },
];

// output = _.chain(data)
//   .groupBy("color")
//   .pairs()
//   .map(function (currentItem) {
//     return _.object(_.zip(["color", "users"], currentItem));
//   })
//   .value();

//output = _.groupBy(data, "color");
//   .pairs()
//   .map(function (currentItem) {
//     return _.object(_.zip(["color", "users"], currentItem));
//   })
//   .value();

output = _.chain(data)
  .groupBy("color")
  .toPairs()
  .map(function (currentItem) {
    console.log("currentItem: ", currentItem);
    return _.zip(["color", "users"], currentItem);
  })
  .value();
console.log("Output: ", output);

// output.map((element) => {
//   console.log("Element: ", element[1]);
// });

const tags = [
  {
    name: "UCAR_TV_LSM_102_Gold",
    type: "Tag",
    tagGroupReference: "UCAR_TV_LSM_102",
    createdTimestamp: "2021-08-16T14:52:09.771317Z",
    createdUserId: "d1c0ba8b-6403-4dbc-ad91-95308d0d5279",
    createdUser: "peterw",
  },
  {
    name: "UCAR_TV_LSM_102_Silver",
    type: "Tag",
    tagGroupReference: "UCAR_TV_LSM_102",
    createdTimestamp: "2021-08-12T17:52:35.863886Z",
    createdUserId: "d1c0ba8b-6403-4dbc-ad91-95308d0d5279",
    createdUser: "peterw",
  },
  {
    name: "UCAR_TV_LSM_102_Bronze",
    type: "Tag",
    tagGroupReference: "UCAR_TV_LSM_102",
    createdTimestamp: "2021-05-04T15:48:56.71Z",
  },
  {
    name: "UCAR_TV_LSM_103_[0-10]",
    type: "Tag",
    tagGroupReference: "UCAR_TV_LSM_103",
    createdTimestamp: "2021-08-12T17:53:05.045504Z",
    createdUserId: "d1c0ba8b-6403-4dbc-ad91-95308d0d5279",
    createdUser: "peterw",
  },
  {
    name: "UCAR_TV_LSM_103_[10-50]",
    type: "Tag",
    tagGroupReference: "UCAR_TV_LSM_103",
    createdTimestamp: "2021-05-04T15:49:18.04Z",
  },
  {
    name: "UCAR_TV_LSM_103_[50-100]",
    type: "Tag",
    tagGroupReference: "UCAR_TV_LSM_103",
    createdTimestamp: "2021-08-16T14:51:16.202094Z",
    createdUserId: "d1c0ba8b-6403-4dbc-ad91-95308d0d5279",
    createdUser: "peterw",
  },
  {
    name: "UCAR_TV_LSM_104_[0-3]",
    type: "Tag",
    tagGroupReference: "UCAR_TV_LSM_104",
    createdTimestamp: "2021-05-04T15:49:37.065Z",
  },
  {
    name: "UCAR_TV_LSM_104_[3-88]",
    type: "Tag",
    tagGroupReference: "UCAR_TV_LSM_104",
    createdTimestamp: "2021-05-04T15:50:10.869Z",
  },
  {
    name: "UCAR_TV_LSM_104_[70]",
    type: "Tag",
    tagGroupReference: "UCAR_TV_LSM_104",
    createdTimestamp: "2021-05-04T15:50:38.039Z",
  },
];

output = _(tags)
  .groupBy("tagGroupReference")
  .map((value, key) => ({ group: key, tags: value }))
  //.map((value, key) => ({ key, value }))
  .value();

//   , function (tag) {
//     return `${tag.tagGroupReference}`;
//   });
console.log("Output: ", output);

console.log("typeof Output: ", typeof output);

//output.map((x) => console.log(x.name));
// output.map((x) => {
//   //console.log(typeof x.tags);

//   console.log(x.tags.values());

//   [x.tags.values()].forEach((ele) => console.log(ele));
// });
