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

function groupBy(
  dataToGroupOn,
  fieldNameToGroupOn,
  fieldNameForGroupName,
  fieldNameForChildren
) {
  var result = _.chain(dataToGroupOn)
    .groupBy(fieldNameToGroupOn)
    .toPairs()
    .map(function (currentItem) {
      return _.zipObject(
        [fieldNameForGroupName, fieldNameForChildren],
        currentItem
      );
    })
    .value();
  return result;
}

var result = groupBy(data, "color", "colorId", "users");

console.log(result);
