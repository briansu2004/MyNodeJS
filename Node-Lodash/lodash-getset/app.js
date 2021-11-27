const set = require("lodash.set");
const get = require("lodash.get");

const user = {
  name: "BrianSu",
  location: "Home",
  occupation: {
    title: "Developer",
    experience: "Senior",
    skillsets: ["Javascript"],
  },
};

console.log("This is the way without lodash - ");
let userSkill = "";

if (
  user.occupation &&
  user.occupation.skillsets &&
  user.occupation.skillsets[2]
) {
  userSkill = user.occupation.skillsets[2];
}
console.log("userSkill: ", userSkill);

console.log();

console.log("This is the way with lodash get - ");
const userSkill2 = get(user, "occupation.skillsets[2]", "not found");
console.log("userSkill: ", userSkill2);

console.log();

console.log("This is the way with lodash set - ");
set(user, "occupation.skillsets[0]", "NodeJS");
set(user, "occupation.skillsets[1]", "Java");
set(user, ["occupation", "responsibilities"], ["Documentation, Tests"]);
console.log(user);
