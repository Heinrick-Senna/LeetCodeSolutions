function findCenter(edges: number[][]): number {

    const val1 = edges[1][0];
    return edges[0].some(item => item == val1) ? val1 : edges[1][1];
};