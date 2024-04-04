/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let nextToClose = [];

    for (let i = 0; i < s.length; i++) {
        if (nextToClose.length > 0) {
            if (nextToClose[nextToClose.length-1] == s[i]) {
                nextToClose.pop();
            } else if (s[i] == ')' || s[i] == '}' || s[i] == ']'){
                return false;
            }
        } else if (s[i] == ')' || s[i] == '}' || s[i] == ']'){
            return false;
        }

        if (s[i] == '(') nextToClose.push(')');
        if (s[i] == '[') nextToClose.push(']');
        if (s[i] == '{') nextToClose.push('}');

    }

    if (nextToClose.length > 0) return false;

    return true;
};