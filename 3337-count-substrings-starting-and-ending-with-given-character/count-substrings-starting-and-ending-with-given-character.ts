function countSubstrings(s: string, c: string): number {
    // const substringPoints = new Map<number, number>();

    let count = 0;
    let pointer = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char == c) {
            pointer++;
            count+= pointer;
            // substringPoints.set(i, pointer);
        }
    };

    // let count = 0;
    // for (let i = 0; i < s.length; i++) {
    //     const char = s[i];

    //     if (char == c) count+= substringPoints.get(i);
    // };

    return count
};