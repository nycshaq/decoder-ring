// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesarModule()", () => {
  it("It should return a string containing either an encoded or decoded message based upon user input", () => {
    
    const alphabetArray = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
  const expected = "wklqnixo"
  const actual =  caesar("thinkful", 3);
    expect(actual).to.eql(expected);
  
  })

  
})









module.exports = { caesar: caesarModule.caesar };