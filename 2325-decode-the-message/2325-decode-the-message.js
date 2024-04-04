/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let keyArr = key.split('')
    keyArr = keyArr.filter((item, i) => item != ' ' && keyArr.indexOf(item) === i);

    let keyObj = {}

    keyArr.forEach((key, i) => keyObj[key] = alphabet[i] )

    const decrypted = message.split('').map(char => {
        return char == ' ' ? char : keyObj[char]
    }).join('')

    return decrypted


};