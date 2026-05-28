function findCenter(edges: number[][]): number {
    const set = new Set<number>();
    const n = edges.length;

    for (const value of edges[0]) set.add(value);

    for (let i = 1; i < n; i++) {
        for (const item of set) {
            if (!edges[i].some(val => val == item)) set.delete(item);
        }
    }

    return Array.from(set)[0]
};