function findCenter(edges: number[][]): number {
    const graph: Map<number, null> = new Map()
    graph.set(edges[0][0], null);
    graph.set(edges[0][1], null);

    const val1 = edges[1][0];
    return graph.has(val1) ? val1 : edges[1][1];
};