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
            let char = prefix[s];
            let newChar = str[s];
            console.log(char, newChar, s)
            if (char != newChar) {
                console.log('teste')
                pointer = s-1;
            }
        }

        console.log(pointer)

        // while (char != newChar) {
        //     console.log(char, newChar, pointer)

        //     pointer--;

        //     char = prefix[pointer];
        //     newChar = str[pointer];            
        // }

        prefix = str.slice(0, pointer+1);
        console.log('String atual: ', str)
        console.log('Prefix atual: ', prefix)
        console.log('Pointer atual: ', pointer)

        if (prefix == '') {
            break;
        }
    }

    return prefix
};