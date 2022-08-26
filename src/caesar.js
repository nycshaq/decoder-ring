// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  /* 
  [a, b, c, d, e, f, g, h, i, j, k,  l,  m,  n,  o,  p,  q,  r,  s,  t,  u,  v,  w,  x,  y,  z]
   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
  catzx shift = 3
  expected results = fdwc
  shift to right when positive
  get idexOf letter from alphabetArray "in ex. c = 2, take index + shift"
  shift = 3, 2 + 3 = 5 = new index

  when out of bounds on right side wrap to a (when shift is positive)
  if index + shift > 26 then index + shift - 26


  cat shift = - 3
  expected results = zxq
  shift to left when negative
  get idexOf letter from alphabetArray "in ex. c = 2, take index + shift"
  index - shift (2-3 = -1) if negative, take length of alpha array (26 - 1), else positive index - shift = new index

  
  when out of bounds on left side wrap to z
    take length of alphabet in example (26 - shift aka 3) this gives us 23 and that should be our letter
  
  */

  function caesar(input, shift, encode = true) {
    // your solution code here
    let results = "";

    //return false if there is no shift value, eqaul to 0, less than -25 or greater than 25
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    // if encode is false invert shift
    if (encode === false) {
      shift *= -1;
    }

    //create array of each letter in alphabet separated by commas: alphabetArray
    let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split(""); //updated
    let newInput = input.toLowerCase.split("")

    //loop through alphabetArray
    for (let index = 0; index < newInput.length; index++) {
      const currentChar = newInput[index]; //updated

      //use indexOf and convert currentChar to lowercase
      let currentCharIndex = alphabetArray.indexOf(currentChar.);

      if (currentCharIndex === -1) {
        results += currentChar;
        // console.log("A" + currentChar + "A")
        continue;
      }
      
      if (shift > 0) {
        let newCharIndex = currentCharIndex + shift;
        // console.log("newIndex", newIndex);
        // break;
        if (newCharIndex >= 26) {
          let newPosition = newCharIndex - 26;
          console.log("newPosition", newPosition)
          results += alphabetArray[newPosition];
        } else {
          results += alphabetArray[newCharIndex];
        }
        /*
        shift to right when positive
        get idexOf letter from alphabetArray "in ex. c = 2, take index + shift"
        shift = 3, 2 + 3 = 5 = new index
      
        when out of bounds on right side wrap to A (when shift is positive)
        if newIndex + shift > 26 then index + shift - 26   
        */
       
      } else {
        let newCharIndex = currentCharIndex + shift;

        
        // console.log("currentChar", currentChar);
        // console.log("caesarCharIndex", caesarCharIndex);
        // console.log("newIndex", newIndex);

        if (newCharIndex < 0) {
          let newPosition = 26 - newCharIndex;
          results += alphabetArray[newPosition];
          
          // console.log("newPosition", newPosition);
          // console.log("newChar", alphabetArray[newPosition]);

        } else {
          results += alphabetArray[newCharIndex];
        }
        // console.log(results);
       

        /* 
        cat shift = - 3
        expected results = zxq
        shift to left when negative
        get idexOf letter from alphabetArray "in ex. c = 2, take index + shift"
        index - shift (2-3 = -1) if negative, take length of alpha array (26 - 1), else positive index - shift = new index

  
       when out of bounds on left side wrap to z
       take length of alphabet in example (26 - shift aka 3) this gives us 23 and that should be our letter
  
        */
      }
    }
    return results;
  }

  return {
    caesar,
  };
})();

// console.log(caesarModule.caesar("thinkful", 3))
// console.log(caesarModule.caesar("thinkful", -3))
//console.log(caesarModule.caesar("wklqnixo", 3, false)) // thinkful
// console.log(caesarModule.caesar("This is a secret message!", 8)) //bpqa qa i amkzmb umaaiom!'
// console.log(caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false))
// console.log(caesarModule.caesar("Thinkful"))
// console.log(caesarModule.caesar("Thinkful", 99))
// console.log(caesarModule.caesar("Thinkful", 26))

module.exports = { caesar: caesarModule.caesar };
