const contains = function (obj, value, match = false) {
  for (const val of Object.values(obj)) {
    if (val === value || (Number.isNaN(value) && Number.isNaN(val)))
      return (match = true);
    if (val && typeof val === "object") {
      match = contains(val, value, match);
    }
  }
  return match;
};

// Do not edit below this line
module.exports = contains;
