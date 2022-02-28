/*
https://www.hackerrank.com/challenges/mini-max-sum/problem

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated integers.

Example
let arr = [1, 2, 3, 4, 5];

The function prints

16 24
*/

// Quickest solution for me was to sort the array which would locate the smallest and largest integer.
// Then, the two sums are easy to calculate by looping through their respective portions of the array.
// The time complexity of .sort() is O(n log n)
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

// Another way to solve it without sort():
function miniMaxSum(arr) {
  let arrSum = 0;

  arr.forEach((int) => {
    arrSum += int;
  });

  let intMax = Math.max(...arr);
  let intMin = Math.min(...arr);

  let minSum = arrSum - intMax;
  let maxSum = arrSum - intMin;

  console.log(`${minSum} ${maxSum}`);
}
