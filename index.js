let edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]
 
let vertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
    {name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
    {name: '23rd&Lex', discovered: null}
]

function findAdjacent(node, vertices, edges) {
    let adjacents = [];
    let result = [];

    edges.forEach(edge => {
        if (edge[0] === node ) {adjacents.push(edge[1])}
        else if (edge[1] === node ) {adjacents.push(edge[0])}
    })

    vertices.forEach(node => {
        if ((node['name'] === adjacents[0] || node['name'] === adjacents[1]) && node['discovered'] === null) {
            result.push(node);
        }
    });
    return result;
}

/*
procedure DFS_iterative(G, v) is
    let S be a stack
    S.push(v)
    while S is not empty do
        v = S.pop()
        if v is not labeled as discovered then
            label v as discovered
            for all edges from v to w in G.adjacentEdges(v) do 
                S.push(w)
*/

function depthFirstSearch(rootNode, vertices, edges) {
    let stack = [rootNode];
    let visited = [rootNode];

    while(stack.length !== 0) {
        let firstNode = stack.pop();

        if (!firstNode.discovered) {
            firstNode.discovered = true;
            let adjacents = findAdjacent(firstNode.name, vertices, edges);
            stack = stack.concat(adjacents);
            visited = visited.concat(adjacents);
        };
    }
    return visited;
}