var merge = function (nums1, m, nums2, n) {
  nums1.length = nums1.length - n;
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5));
console.log(merge([1, 2, 4, 5, 6, 0], 5, [3], 1)); // [1,2,3,4,5,6]
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); // [-1,0,0,1,2,2,3,3,3]

/*----------------------------------------------------------------

  const lastSpots = nums1.slice(-n);
  console.log(lastSpots);
  nums1.unshift(...lastSpots);
  nums1.length = m + n;
  console.log(nums1);

  for (let i = 0; i < nums2.length; i++) {
    nums1[i] = nums2[i];
  }

  nums1.sort();


 for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] === 0) {
      //   console.log("æ");
      nums1[i] = nums2[i];
    }
  }





  //   nums1 = nums1.concat(nums2);
  //   console.log("nums2", nums2);
  //   console.log("nums1", nums1);
  
  
       nums2.forEach((el, idx) => {
        console.log(el);
        nums1.splice(i, 1, el);
      });
  
  
  
    //   console.log(nums1[i]);
      //   console.log("idx", i - n);

  
    console.log(nums2[i]);
    console.log("idx", i - n);

  if (nums1.length === 1) {
    nums1[0] = nums2[0];
  }

  for (let i = 0; i < nums1.length; i++) {
    // console.log(nums1[i]);
    if (nums1[i] < 1) {
      console.log(nums2[i]);
      nums1[i] = nums2[i];
    }
  }
  nums1.sort();


*/
