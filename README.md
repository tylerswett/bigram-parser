# Bigram Node App

This simple app allows you to parse and count bigrams in any given input string

### Command line usage

npm run start [file]     ... When running in this method, the text content of the file path will automatically be lowercased, punctuation removed, and results will be output to the console
npm run test             ... Executes unit test cases
 
### Functions and usage

**formatInput** - _Input: String, Output: String[]_ - 
Converts an input string to lowercase, removes punctuation, and converts it into an array of separate strings

**countBigrams** - _Input: String[], Output: Map()_ - 
Recursively goes through each bigram in your string array and counts the amount of times each bigram appears into a Map. Provide formatted input to this, or if you want your bigrams to be case sensitive or to include punctuation, then pass in your own array of input strings

**formatHistogramString** - _Input: Map(), Output: String_ - 
Takes in your histogram map and creates a human readable string showing the amount of times each bigram occured