const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  return backyard.reduce((count, item) => {
    return (
      count +
      item.reduce((count, item) => {
        return count + (item === "^^" ? 1 : 0);
      }, 0)
    );
  }, 0);
  // remove line with error and write your code here
};
