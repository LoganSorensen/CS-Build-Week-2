/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const newArr = [];

  nums.forEach((num) => {
    // checks to see whether the array contains duplicates by adding each unique number to a new array, and returning if the new array already contains one of the numbers
    if (newArr.includes(num)) {
      return;
    } else {
      newArr.push(num);
    }
  });

  // compares the length of the new array and the initial array, if they are the same length, there are no duplicates
  if (newArr.length === nums.length) {
    return false;
  } else {
    return true;
  }
};
