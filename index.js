function findAdjacent(rootNodeName, vertices, edges) {
  //iterate through all the edges
  //find the edges that include the rootNode, get all the names
  //find the vertices that have that name--minus the original one
  const matches = edges.filter((edge) => edge.includes(rootNodeName)).flat();

  const adjacent = vertices.filter(
    (vertex) =>
      matches.includes(vertex.name) &&
      vertex.name != rootNodeName &&
      vertex.discovered === null
  );
  console.log(`findAdjacent is returning ${JSON.stringify(adjacent)}`);
  return adjacent;
}
// function markDistanceAndPredecessor(vertex, adjacentNodes) {
//   if (vertex.distance === null) {
//     vertex.distance = 0;
//   }
//   adjacentNodes.forEach((node) => {
//     node.predecessor = vertex;
//     node.distance = node.predecessor.distance + 1;
//   });
//   console.log(`after marking, vertex is ${JSON.stringify(vertex)}`);
//   console.log(`adjacentNodes are ${JSON.stringify(adjacentNodes)}`);
//   debugger;
// }

function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [];
  let visited = [];
  stack.push(rootNode);
  while (stack.length > 0) {
    const vertex = stack.pop();
    console.log(vertex);
    const adjacent = findAdjacent(vertex.name, vertices, edges);
    if (vertex.discovered === null) {
      vertex.discovered = true;
      visited.push(vertex);
      console.log(adjacent);
      for (const vertex of adjacent) {
        console.log(vertex);
        stack.push(vertex);
      }
    }
  }
  return visited;
}
