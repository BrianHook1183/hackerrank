/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
*/

function miniMaxSum(arr) {
  let sortedArr = arr.sort();

  let minSum = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    minSum += sortedArr[i];
  }

  let maxSum = 0;
  for (let i = 1; i < sortedArr.length; i++) {
    maxSum += sortedArr[i];
  }

  console.log(`${minSum} ${maxSum}`);
}
