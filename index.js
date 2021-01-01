function depthFirstSearch(rootNode, vertices, edges) {
    let visited = [];
    let explored = [];

    visited.push(rootNode);

    while (visited.length !== 0) {
        let firstNode = visited.pop();
        firstNode.discovered = true;
        explored.push(firstNode); 
        let adjacentVertices = findAdjacent(firstNode, vertices, edges);

        adjacentVertices.filter( (vertice) => !vertice.discovered ).map( (vertice) => visited.push(vertice) )
        // find adjacent vertices and push them onto visited
    }

    return explored;
}

function findAdjacent(node, vertices, edges) {
    return edges.filter( 
        (edge) => edge.includes(node.name) 
    ).map( 
        (edge) => edge.find( 
            (edgeName) => edgeName !== node.name 
        )
    ).map( (edgeName) => 
        vertices.find( 
            (vertice) => vertice.name === edgeName
        )
    )
}