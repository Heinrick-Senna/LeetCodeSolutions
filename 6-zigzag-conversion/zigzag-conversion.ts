function convert(s: string, numRows: number): string {
    const stringLen = s.length;

    if (stringLen <= numRows || numRows == 1) return s;

    let cur = 0, dir = 1;
    let rows = [];

    for (const char of s) {
        rows[cur] = (rows[cur] || "") + char;
        
        if (cur == 0) dir = 1;
        else if (cur == numRows - 1) dir = -1;
        
        cur += dir;
    }

    return rows.join('');
};