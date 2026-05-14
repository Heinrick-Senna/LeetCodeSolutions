function integerBreak(n: number): number {
    if (n == 3) return 2;

    const returnRest = (amount: number): number[] => {
        if (amount == 2) return [1]
        if (amount == 3) return [3]

        const rest = amount % 3;

        if (rest == 0) return Array(amount / 3).fill(3);
        if (rest == 1) return [2, 2, ...(returnRest(amount - 4))];
        if (rest == 2) return [2, ...(returnRest(amount-2))]
    }

    const sum = returnRest(n);
    return sum.reduce((acc, cv) => acc * cv);
};