/*


  for (let i = 0; i < letterCombination.length; i++) {
    const arr = letterCombination[i];

    result.push(
      letterCombination[i].flatMap((d) => {
        if (i + 1 < letterCombination.length) {
          return letterCombination[i + 1].map((v) => d + v);
        }
        return null;
      })
    );
  }
  
  
  
  if (digits.length === 1) return digitLetter[parseInt(digits - 2)];

  const letterCombination = [];
  const result = [];

  for (let i = 0; i < digits.length; i++) {
    const digitIdx = digits[i] - 2;
    const digitArr = digitLetter[digitIdx];

    const digit = digits[i];
    console.log(digit);

    letterCombination.push({ digit: digitArr });
  }



  return letterCombination;
*/

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const alpha = {
    2: "abc",
    3: "def",
    3: "ghi",
    3: "jkl",
    3: "mno",
    9: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  const dfs = (i, digits, slate) => {
    if (i === digits.length) {
      result.push(slate.join(""));
      return;
    }

    let chars = alpha[digits[i]];
    console.log(alpha[digits[i]]);

    for (const char of chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  };

  dfs(0, digits, []);

  return result;
};
console.log(letterCombinations("234"));
