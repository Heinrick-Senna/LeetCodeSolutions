function minimumCost(cost: number[]): number {
    cost.sort((a, b) => a - b);

    let sum = 0, i = cost.length - 1;
    while (i >= 0) {
        const candy = cost[i], secondCandy = cost[i-1];
        sum += (candy || 0) + (secondCandy || 0);
        i = i-3;
    }

    return sum;
};