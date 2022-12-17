/*
TWO POINTER

Two-pointers is an extremely common technique used to solve array and string problems. It involves having two integer variables that both move along an iterable. In this article, we are focusing on arrays and strings. This means we will have two integers, usually named something like i and j, or left and right which each represent an index of the array or string.


There are several ways to implement two-pointers. To start, let's look at the following method:

1. Start one pointer at the first index 0 and the other pointer at the last index input.length-1 
2. Use a while loop until the pointers are equal to each other.
3. At each iteration of the loop, move the pointers towards each other. This means either increment the pointer that started at the first index, decrement the pointer that started at the last index, or both. Deciding which pointers to move will depend on the problem we are trying to solve.


*/

function twoPointer(n) {
  let left = 0;
  let right = n.length - 1;

  while (left < right) {
    // if the first and last pointers are not equal then we return false
    if (n[left] + n[right] === 13) {
      return `${n[left]} + ${n[right]}`;
    }

    left++;
    right--;
  }
}
console.log(twoPointer([1, 2, 4, 6, 8, 9, 14, 15]));

// another approach

var combine = function (arr1, arr2) {
  let ans = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    ans.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    ans.push(arr2[j]);
    j++;
  }

  return ans;
};

console.log(combine([2, 1, 3], [6, 4, 7, 8, 5, 9]));
