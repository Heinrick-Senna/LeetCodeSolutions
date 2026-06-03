function countSubstrings(s: string, c: string): number {
    let count = 0;
    let pointer = 0;
    for (const char of s) {
        if (char == c) {
            pointer++;
            count += pointer;
        }
    }
    return count
};