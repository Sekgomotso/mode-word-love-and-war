# mode-word-love-and-war

This programme reads War and Peace book and returns the most frequently occurring word and the 7th most occuring word.

## What I learnt from completing the assessment
1. Strategising. I learnt about mapping and keys, I had no idea that javascript had such a property.

## Steps I took to ensure that my output is correct
1. Used the fs module to allow the programme to read the text file
2. Splitted the words to accomodate spaces, tabs and new lines using regex, then created an array that stores the words
3. Created a function that saves the words count as an object.
4. Created an array function that sorts the word count from highest to lowest, meaning index [0] will be the most used word.
5. Console loged index [0] and [6] for the most used and the 7th most used words.