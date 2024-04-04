/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    const correctWords = [];
    for (let i = 0; i < queries.length; i++ ) {
        const word = queries[i];

        for (let z = 0; z < dictionary.length; z++) {
            const correct = dictionary[z];
            let badLetters = 0;

            for (let j = 0; j < word.length; j++) {
                if (word[j] != correct[j]) badLetters++; 
                if (badLetters == 3) break;
            }

            if (badLetters <= 2) {
                correctWords.push(word);
                break;
            }

        }
    }
    
    return correctWords
};