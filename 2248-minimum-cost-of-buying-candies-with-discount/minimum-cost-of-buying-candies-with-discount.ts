function minimumCost(cost: number[]): number {
    cost.sort((a, b) => a - b);

    let sum = 0;
    while (cost.length) {
        let lastCost = cost.pop();
        let secondCost = cost.pop();
        let freeCandy = cost.pop();

        sum += lastCost || 0;
        sum += secondCost || 0;
    }

    return sum;
};