const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .reduce((name, item) => {
          return (
            name +
            (typeof item === "string" ? item.trim()[0].toUpperCase() : "")
          );
        }, "")
        .split("")
        .sort()
        .join("")
    : false;
  // remove line with error and write your code here
};
