const pascal = function (rowNo) {
  if (rowNo === 1) {
    return [1];
  } else {
    const lastRow = pascal(rowNo - 1);
    lastRow.push(0);
    lastRow.unshift(0);
    const currentRow = [];
    for (i = 0; i < lastRow.length - 1; i++) {
      currentRow.push(lastRow[i] + lastRow[i + 1]);
    }
    return currentRow;
  }
};

// Do not edit below this line
module.exports = pascal;
