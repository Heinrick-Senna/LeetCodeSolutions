function findWinners(matches: number[][]): number[][] {
    const flawless = new Set<number>([]);
    const oneLosePlayers = new Set<number>([]);
    const defeated = new Set<number>([]);

    for (const match of matches) {
        const winner = match[0], loser = match[1];

        if (!defeated.has(winner) && !oneLosePlayers.has(winner)) flawless.add(winner);

        if (defeated.has(loser)) continue;

        if (oneLosePlayers.has(loser)) {
            defeated.add(loser);
            oneLosePlayers.delete(loser);
            continue;
        }

        flawless.delete(loser);
        oneLosePlayers.add(loser)
    }

    return [[...flawless].sort((a, b) => a - b), [...oneLosePlayers].sort((a, b) => a - b)]
};