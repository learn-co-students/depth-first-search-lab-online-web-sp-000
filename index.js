function depthFirstSearch(root, vertices, edges) {
  let toVisitQueue = [];
  let visited = [];
  toVisitQueue.push(root);

  while (toVisitQueue.length !== 0) {
    let currentNode = toVisitQueue.pop();
    visited.push(currentNode);
    currentNode.discovered = true;

    let adjacentNodes = findNotDiscoveredAdjacent(currentNode.name, vertices, edges);
    for (let i=adjacentNodes.length-1; i>=0; i--) {
      toVisitQueue.push(adjacentNodes[i]);
    }
  }

  return visited;
}

// ---------- FOR REFERENCE ----------------

function findNotDiscoveredAdjacent(nodeName, vertices, edges) {
  let adjacent = [];
  let neighbor;
  for (let i=0; i<edges.length; i++) {
    if (edges[i][0] === nodeName) {
      neighbor = vertices.find(vert => vert.name === edges[i][1]);
      if (neighbor.discovered === null) {
        adjacent.push(neighbor);
      }
    } else if (edges[i][1] === nodeName) {
      neighbor = vertices.find(vert => vert.name === edges[i][0]);
      if (neighbor.discovered === null) {
        adjacent.push(neighbor);
      }
    }
  }

  return adjacent;
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  for (let i=0; i<adjacentNodes.length; i++) {
    let currentNeighbor = adjacentNodes[i];
    currentNeighbor.distance = node.distance + 1;
    currentNeighbor.predecessor = node;
  }

  return adjacentNodes;
}
