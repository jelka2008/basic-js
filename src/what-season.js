//const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  const isNotDate = !(date instanceof Date);
  const hasKeys = Object.keys(date).length > 0;

  const shouldFail = isNotDate || hasKeys;

  if (shouldFail) {
    throw new Error();
  }

  switch (date.getMonth()) {
    case 0:
      return "winter";
    case 1:
      return "winter";
    case 2:
      return "spring";
    case 3:
      return "spring";
    case 4:
      return "spring";
    case 5:
      return "summer";
    case 6:
      return "summer";
    case 7:
      return "summer";
    case 8:
      return "autumn (fall)";
    case 9:
      return "autumn (fall)";
    case 10:
      return "autumn (fall)";
    case 11:
      return "winter";
    default:
      return "Unable to determine the time of year!";
  }

  // remove line with error and write your code here
};
