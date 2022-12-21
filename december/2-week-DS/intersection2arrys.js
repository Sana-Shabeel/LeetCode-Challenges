var intersect = function (nums1, nums2) {
  const shortestArray = nums1.length < nums2.length ? nums1 : nums2;
  const longestArray = nums2.length > nums1.length ? nums2 : nums1;

  const appears = [];
  for (let i = 0; i < shortestArray.length; i++) {
    if (longestArray.includes(shortestArray[i])) {
      appears.push(shortestArray[i]);
      longestArray.splice(longestArray.indexOf(shortestArray[i]), 1);
    }
  }
  console.log("longestArray", longestArray);
  console.log("shortestArray", shortestArray);

  return appears;
};
