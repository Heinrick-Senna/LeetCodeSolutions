function findCenter(edges: number[][]): number {
    const set = new Set<number>();
    const n = edges.length;

    for (const value of edges[0]) set.add(value);

    for (const item of set) {
        for (let i = 1; i < n; i++) {
            if (!edges[i].some(val => val == item)) set.delete(item);
        }
    }

    return Array.from(set)[0]
};