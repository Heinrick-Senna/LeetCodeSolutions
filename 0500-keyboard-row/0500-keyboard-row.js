/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  let response = [];

  rows.forEach(row => {
    words.forEach(word => {
      let lettersWord = word.split('');
      let lettersRow = row.split('')

      for (let i = 0; i < lettersWord.length; i++) {
        if (lettersRow.indexOf(lettersWord[i].toLowerCase()) == -1) {
          break;
        } else if (i == lettersWord.length-1) {
          response.push(word);
        }
      }

    });
  });
    
  return response;


};