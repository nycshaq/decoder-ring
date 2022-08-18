// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = function () {
  // you can add any code you want within this function scope

  //create caesar = " " variable to store results

  let caesar = " ";

  function caesar(input, shift, encode = true) {
    // your solution code here

    //return false if there is no shift value, eqaul to 0, less than -25 or greater than 25
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    if (encode === false) {
      shift *= -1;
    }

    //create array of each letter in alphabet separated by commas: alphabetArray
    let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split(" "); //updated

    //loop through alphabetArray
    for (let index = 0; index < input.length; index++) {
      const currentChar = input[index].toLowerCase(); //updated

      //use indexOf ? **
      let caesarCharIndex = alphabetArray.indexOf(currentChar);
      caesarCharIndex += shift;
    }
    if (caesarCharIndex > 25) {
      caesarCharIndex -= 26;
    }
    if (caesarCharIndex < 0) {
      caesarCharIndex += 26;
    }
  }

  return {
    //maintain space separation if needed

    caesar,
  };
};

module.exports = { caesar: caesarModule.caesar };
