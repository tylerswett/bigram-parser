const fs = require('fs');

//Get command line parameters - first param is file path
const cmdArgs = process.argv.slice(2);
const filePath = cmdArgs[0];

//Read file from command line path
if (filePath) {
  fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    var strings = formatInput(data);
    var finalHistogram = countBigrams(strings);
    var histogramString = formatHistogramString(finalHistogram);
    console.log(histogramString);
  });
}

var formatInput = function (inputText) {
  //Format text to lowercase and remove punctuation with regex
  var lowercaseInput = inputText.toLowerCase();
  var noPunctuationInput = lowercaseInput.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\n]/g, '');

  //Convert to string array
  var strings = noPunctuationInput.split(" ");

  return strings;
}

//Map to store counts for each bigram
var histogram = new Map();
var countBigrams = function (allWords) {
  //Create bigram string
  var bigramText = allWords[0]+" "+allWords[1];

  //Check if bigram is in histogram map. If it exists, increment its value, if not set it to an initial value of 1
  histogram.set(bigramText,histogram.has(bigramText) ? histogram.get(bigramText)+1 : 1);
    
  //Stop recurrence when we're at the last 2 words in the array
  if (allWords.length>2) {
    //Remove first word and re-run the function recursively
    allWords.shift();
    countBigrams(allWords);

    return histogram;
  }
}

var formatHistogramString = function (histogram) {
  var formattedHist = "";

  //Loop through each bigram and output it's string and count
  histogram.forEach((val, key) => {
    formattedHist += `"${key}" ${val}\n`;
  });

  //Remove trainling newline
  formattedHist = formattedHist.slice(0,-1);
  return formattedHist;
}

module.exports = {formatInput, countBigrams, formatHistogramString}