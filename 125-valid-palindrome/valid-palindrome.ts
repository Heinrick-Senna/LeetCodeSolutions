function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    if (s == "") return true;

    let i = 0, j = s.length-1;

    while(j >= i) {
        if (s[i] != s[j]) return false;

        i++;
        j--;
    }

    return true;
};