// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = function () {
  // you can add any code you want within this function scope

  //create caesar = " " variable to store results

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

    //loop through alphabetArray
    for (let index = 0; index < input.length; index++) {
      
      const currentChar = input[index]; //updated
      
      //use indexOf and convert currentChar to lowercase
      let caesarCharIndex = alphabetArray.indexOf(currentChar.toLowerCase());
      
      if (caesarCharIndex === -1) {
        results += currentChar;
        continue;
      }

      if (shift > 0) {
        let newIndex = caesarCharIndex + shift;
        if (newIndex > 26) {
          let newPosition = newIndex + shift - 26;
          results += alphabetArray[newPosition];
        } else {
          results += alphabetArray[newIndex];
        }
        /*
        shift to right when positive
        get idexOf letter from alphabetArray "in ex. c = 2, take index + shift"
        shift = 3, 2 + 3 = 5 = new index
      
        when out of bounds on right side wrap to A (when shift is positive)
        if newIndex + shift > 26 then index + shift - 26   
        */
      } else {
        let newIndex = caesarCharIndex - shift;
        if(newIndex < 0){
          let newPosition = 26 - newIndex
          results += alphabetArray[newPosition];
        }

        else {
          results += alphabetArray[newIndex];
        }

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
  return results
}

return {
 
  caesar,
};
};
console.log(caesarModule().caesar("cat", -3))
module.exports = { caesar: caesarModule.caesar };

