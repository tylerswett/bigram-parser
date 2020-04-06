const bigram = require('../bigram.js');

const assert = require('assert');

const testString = "The quick brown fox and the quick blue hare.";

describe('Input format test', () => {
  const formattedInput = bigram.formatInput(testString);

  it('test string should have an array of 9 words', () => {
     assert.equal(formattedInput.length, 9);
  });
  it('all strings in array should have no punctuation', () => {
    formattedInput.forEach((val, key) => {
      var hasPunc = val.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\n]/g);
      assert.ok(!hasPunc, `"${val}" has punctuation`);
    })
  });
});


describe('Bigram counting test', () => {
  const formattedInput = bigram.formatInput(testString);
  const testBigram = bigram.countBigrams(formattedInput);

 it('test string should have 7 bigrams', () => {
    assert.equal(testBigram.size, 7);
  });
 it('counts for each bigrams should be 2, 1, 1, 1, 1, 1, 1', () => {
    assert.equal(testBigram.get("the quick"),2)
    assert.equal(testBigram.get("quick brown"),1)
    assert.equal(testBigram.get("brown fox"),1)
    assert.equal(testBigram.get("fox and"),1)
    assert.equal(testBigram.get("and the"),1)
    assert.equal(testBigram.get("quick blue"),1)
    assert.equal(testBigram.get("blue hare"),1)
  });
});

describe('Histogram string format test', () => {
  //Create an example histogram map
  var testHist = new Map();
  testHist.set("test bigram", 2);
  testHist.set("bigram val", 1);

  var testString = bigram.formatHistogramString(testHist);
  var expectedString = `"test bigram" 2\n"bigram val" 1`;

  //check if it's output string is in the correct format (without trainling newline)
  it('output string format is correct', () => {
    assert.equal(testString, expectedString);
  });
});