/*

Sure, I can help you with this. To find the longest continuous subarray with exactly two distinct elements, you can use a sliding window approach. 


This approach starts by having two pointers, one representing the start of the window and one representing the end of the window. In each iteration, the window is increased until there are two distinct elements in the window. Once two distinct elements are present, the window is moved forward until there is only one element in the window. The maximum length of the window is stored, and the process is repeated until the end of the array is reached. 


Here is the code for finding the longest continuous subarray with exactly two distinct elements in Javascript:






*/
var totalFruit = function (fruits) {
  let longestSubarray = 0;
  let start = 0;
  let end = 0;
  let hashMap = new Map();

  while (end < fruits.length) {
    // Increase the window size until 2 distinct elements
    if (hashMap.size <= 2) {
      let key = fruits[end];
      let count = hashMap.has(key) ? hashMap.get(key) : 0;
      hashMap.set(key, count + 1);
      end++;
    }

    // Shrink the window size until 1 distinct element
    if (hashMap.size > 2) {
      let key = fruits[start];
      let count = hashMap.get(key);
      if (count === 1) {
        hashMap.delete(key);
      } else {
        hashMap.set(key, count - 1);
      }
      start++;
    }

    // Update the longest sub array size
    longestSubarray = Math.max(longestSubarray, end - start);
  }
  return longestSubarray;
};

console.log(totalFruit([0, 2, 1, 1]));
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([1, 2, 3, 2, 2]));

var totalFruit = function (fruits) {
  let lastFruit = -1;
  let secondLastFruit = -1;
  let lastFruitCount = 0;
  let currentMax = 0;
  let max = 0;

  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];

    if (fruit === lastFruit || fruit === secondLastFruit) {
      currentMax += 1;
    } else {
      currentMax = lastFruitCount + 1;
    }

    if (fruit === lastFruit) {
      lastFruitCount += 1;
    } else {
      lastFruitCount = 1;
    }

    if (fruit !== lastFruit) {
      secondLastFruit = lastFruit;
      lastFruit = fruit;
    }
    max = Math.max(currentMax, max);
  }

  return max;
};
