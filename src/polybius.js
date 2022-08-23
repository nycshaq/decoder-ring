// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // create alphabet array separated by spaces - alphaArray = "abcdefghijklmnopqrstuvwxyz".split("");
   // create number array - numArray = [1, 2, 3, 4, 5,]

   //use slice method to access 2 numbers multiple numbers in numArray if necessary

  function polybius(input, encode = true) {
    // your solution code here
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
