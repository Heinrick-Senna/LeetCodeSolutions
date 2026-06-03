function countSubstrings(s: string, c: string): number {
    let n = 0, p = 0;
    for (const ch of s) {
        if (ch == c) {
            p++;
            n += p;
        }
    }
    return n
};