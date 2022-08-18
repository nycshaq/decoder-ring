// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
   //create caesar = "" variable to store results

  function caesar(input, shift, encode = true) {
    // your solution code here
    
    //return false if there is no shift value, eqaul to 0, less than -25 or greater than 25
    if(!shift || shift < -25 || shift > 25) {
      return false
    }
    if(encode === false){
      shift *= -1
    }
   
    //create array of each letter in alphabet separated by commas: alphabetArray 
    let alphabetArray = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
    
    //loop through alphabetArray
    for(let index = 0; index < input.length; input ++){
      const currentChar = input[index]
      
       //use indexOf ? **
      let caesarCharIndex = alphabetArray.indexOf(currentChar)
      caesarCharIndex += shift
    }
    
     
   
  }

  return {
    //maintain space separation if needed
    
    caesar,
  };
});

module.exports = { caesar: caesarModule.caesar };
