function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    let pointer = prefix.length - 1;

    for (let z = 1; z < strs.length; z++) {
        const str = strs[z];

        if (str.trim() == "") {
            prefix = '';
            break;
        }

        for (let s = pointer; s >= 0; s--) {
            const char = prefix[s], newChar = str[s];
            
            if (char != newChar) pointer = s-1;
        }

        prefix = str.slice(0, pointer+1);

        if (prefix == '') {
            break;
        }
    }

    return prefix
};