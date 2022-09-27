/*
TODO;

Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

- the first row consists of the characters "qwertyuiop",
- the second row consists of the characters "asdfghjkl", and
- the third row consists of the characters "zxcvbnm".


Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]


Example 2:

Input: words = ["omk"]
Output: []

*/

var findWords = function (words) {};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

/*



 for (let i = 0; i < words.length; i++) {
    console.log(words[i]);

    for (let j = 0; j < words[i].length; j++) {
      console.log(console.log(words[i][j]));
      let word = words[i][j];

      console.log(row1.reduce((a, c) => (a === c ? a + 1 : a + 0), 0));
    }
  }

  
   return row.filter((item, idx) => word.iOf(item) !== idx);
   
   
   
   
   
   
     for (let i = 0; i < word.length; i++) {
      const splitWord = word[i].split(" ");

      console.log(splitWord);

      const result = splitWord.reduce((acc, curr) => {
        console.log(curr);
        return row.includes(curr) ? acc + 1 : acc + "a";
      });

      console.log(result);
    }
    
    
    
    
    
    
      for (let i = 0; i < word.length; i++) {
      const element = word[i];

      //   for (let j = 0; j < word[i].length; j++) {
      //     const element = word[i][j];
      //     console.log(element);

      //     const d = row.includes(element) ? count + 1 : count + 0;
      //   }
      return element.split("").reduce((a, c) => {
        console.log(c);
      });
    }
    
    
    
      const x = (row, word) => {
    // const splitWord = word.split(" ");

    console.log(word);
    console.log(row);

    // loop through the words array
    // using include and add 1

    let count = 0;

  
    // return count;
  };

  return x(row2, words);
  
  
  
  
  
  
  
  
    //   const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  //   const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  //   const row3 = ["z", "x", "c", "v", "b", "n", "m"];

  //   // lowercase words
  //   const lowered = words.map((word) => word.toLowerCase());

  //   const x = lowered.reduce((acc, curr) => {
  //     // console.log(curr);
  //     for (let i = 0; i < curr.length; i++) {
  //       const element = curr[i];
  //       console.log(element);
  //     }
  //   }, 0);

*/
