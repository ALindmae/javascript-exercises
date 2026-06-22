const totalIntegers = function (item, total = 0, validated = false) {
  if (!validated) {
    if (!(item !== null && typeof item === "object")) {
      return undefined;
    }
  }
  if (Number.isInteger(item)) {
    return 1;
  }
  if (Array.isArray(item)) {
    for (const value of item) total += totalIntegers(value, 0, true);
  } else if (item != null && typeof item === "object") {
    for (const value of Object.values(item))
      total += totalIntegers(value, 0, true);
  }
  return total;
};

// Do not edit below this line
module.exports = totalIntegers;
