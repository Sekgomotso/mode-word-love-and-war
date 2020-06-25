"use strict"

const fs = require('fs');
const book = 'war-and-peace.txt';

function mostUsedWord() {

    // reading the txt file
    fs.readFile(book, 'utf-8', (err, data) => {
        if(err) throw err;

        let space = avoidSpaces(data);
        let wordsObject = words(space);
        let arrayOfWords = sortWords(wordsObject);
        console.log("Most frequently occuring word: " + arrayOfWords[0].name + "\n" +  "Total: " + arrayOfWords[0].total);
        console.log("7th most frequently occuring word: " + arrayOfWords[6].name + "\n" +  "Total: " + arrayOfWords[6].total);

        // using spaces, tabs and new line to split words and store them in an array
        function avoidSpaces(word) {
            let space = word.split(/\s+/);
            return space;
        }
    });

    //give us the count of how many times the word appears
    function words(array) {

        // object to store words and counting words appearance
        let wordsObject = {};

        array.forEach(name => {

            if(wordsObject.hasOwnProperty(name)) {
                wordsObject[name]++;
            } else {
                wordsObject[name] = 1;
            }
        });
        return wordsObject;
    }

    // sort words from the highest to lowest frequently used word
    function sortWords(wordsObject){

        // store the words in an array
        let arrayOfWords = [];

        arrayOfWords = Object.keys(wordsObject).map(name => {
            return {
              name: name,
              total: wordsObject[name]
            };
          });

        //total number of words
        arrayOfWords.sort((firstWord, lastWord) => {
        return lastWord.total - firstWord.total;
        });
        
          return arrayOfWords;
    }
}

mostUsedWord();

module.exports = { mostUsedWord }