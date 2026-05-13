function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];

    for (let z = 1; z < strs.length; z++) {
        const str = strs[z];

        if (str.trim() == "") {
            prefix = '';
            break;
        }

        for (let i = 0; i < Math.max(str.length, prefix.length); i++) {
            const char = prefix[i];
            const newChar = str[i];

            console.log(i, char, newChar);

            if (char != newChar) {
                prefix = str.slice(0, i);
                break;
            }
        }

        if (prefix == '') {
            break;
        }


    }

    return prefix
};