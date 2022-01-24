let _ = require("lodash");

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

// function groupBy(
//   dataToGroupOn,
//   fieldNameToGroupOn,
//   fieldNameForGroupName,
//   fieldNameForChildren
// ) {
//   var result = _.chain(dataToGroupOn)
//     .groupBy(fieldNameToGroupOn)
//     .toPairs()
//     .map(function (currentItem) {
//       return _.zipObject(
//         [fieldNameForGroupName, fieldNameForChildren],
//         currentItem
//       );
//     })
//     .value();
//   return result;
// }

// var result = groupBy(data, "color", "colorId", "users");

// const result = _.chain(data)
//   .groupBy("color")
//   .toPairs()
//   .map((pair) => _.zipObject(["color", "users"], pair))
//   .value();

// var result = _(data)
//   .groupBy((x) => x.color)
//   .map((value, key) => ({
//     color: key,
//     totalAge: _.sumBy(value, "age"),
//     //users: value,
//   }))
//   .value();

// _.chain(data)
//   .groupBy("color")
//   .toPairs()
//   .map((item) => _.zipObject(["color", "users"], item))
//   .value();

var result = _(data)
  .groupBy((x) => x.color)
  .map((value, key) => ({
    color: key,
    //names: _.join(value.name, ","),
    //names: _.join(value, ","),
    //names: value.name,
    users: value,
  }))
  .value();

console.log(result);
