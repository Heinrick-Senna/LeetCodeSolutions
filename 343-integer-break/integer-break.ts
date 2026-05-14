function integerBreak(n: number): number {
    if (n == 3) return 2;

    const returnRest = (amount: number): number[] => {
        const rest = amount % 3;
        console.log(amount, rest);

        if (amount == 2) {
            return [1]
        }

        if (amount == 3) {
            return [3]
        }

        if (rest == 0) {
            return Array(amount / 3).fill(3);
        }

        if (rest == 1) {
            const newAmount = amount - 4;
            return [2, 2, ...(returnRest(newAmount))];
        }

        if (rest == 2) {
            return [2, ...(returnRest(amount-2))]
        }
    }

    const sum = returnRest(n);

    console.log(sum);
    let num = 1;

    sum.forEach(x => {
        num = x * num;
    })

    return num
};