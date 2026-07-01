const permutations = (nums, sol = [], res = []) => {
  if (nums.length === 1) sol.push([...nums]);
  else if (res.length === nums.length) {
    sol.push([...res]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (!res.includes(nums[i])) {
        res.push(nums[i]);
        permutations(nums, sol, res);
        res.pop();
      }
    }
  }
  return sol;
};

// Do not edit below this line
module.exports = permutations;
