const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const validInput =
    typeof sampleActivity === "string" &&
    !isNaN(Number(sampleActivity)) &&
    Number(sampleActivity) <= 15 &&
    Number(sampleActivity) > 0;
  return validInput
    ? Math.ceil(
        Math.log(MODERN_ACTIVITY / sampleActivity) /
          (Math.log(2) / HALF_LIFE_PERIOD)
      )
    : false;
  // remove line with error and write your code here
};
