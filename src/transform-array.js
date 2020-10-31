const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let rezArray = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "--discard-next" ||
      arr[i] === "--discard-prev" ||
      arr[i] === "--double-next" ||
      arr[i] === "--double-prev"
    ) {
      if (
        (arr[i].includes("next") && rezArray[i + 1] === undefined) ||
        (arr[i].includes("prev") && rezArray[i - 1] === undefined)
      ) {
        rezArray[i] = undefined;
      } else {
        switch (arr[i]) {
          case "--discard-next":
            rezArray[i] = undefined;
            rezArray[i + 1] = undefined;
            break;
          case "--discard-prev":
            rezArray[i] = undefined;
            rezArray[i - 1] = undefined;
            break;
          case "--double-next":
            rezArray[i] = rezArray[i + 1];
            // rezArray[i+1]=arr[i+1];
            break;
          case "--double-prev":
            rezArray[i] = rezArray[i - 1];
            // rezArray[i-1]=arr[i-1];
            break;
          default:
            break;
        }
      }
    }
  }
  rezArray = rezArray.filter((item) => {
    return item !== undefined;
  });

  return rezArray;
};
