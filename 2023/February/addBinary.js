/*
Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

const bToD = (b) => {
  let binary = b.split("");

  let decimal = 0n;
  for (let i = 0; i < binary.length; i++) {
    decimal = decimal * 2n + BigInt(parseInt(binary[i]));
  }

  return decimal;
};

var addBinary = function (a, b) {
  // let numA = bToD(a);
  // let numB = bToD(b);
  // return (numA + numB).toString(2);
};
