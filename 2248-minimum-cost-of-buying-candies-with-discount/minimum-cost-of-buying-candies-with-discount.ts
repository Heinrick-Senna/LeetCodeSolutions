function minimumCost(cost: number[]): number {
    cost.sort((a, b) => a - b);

    let sum = 0, i = cost.length - 1;
    while (i >= 0) {
        sum += (cost[i] || 0) + (cost[i-1] || 0);
        i -= 3;
    }

    return sum;
};