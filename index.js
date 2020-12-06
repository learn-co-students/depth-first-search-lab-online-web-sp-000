function depthFirstSearch(rootNode, vertices, edges){
  let target = [rootNode];
  let stack = [rootNode];

  while (stack.length > 0){
    let current = stack.pop();
    if (current.discovered === null){
      current.discovered = true;

      const adjacents = findAdjacents(current.name, vertices, edges);

      stack = stack.concat(adjacents);
      target = target.concat(adjacents);
    }
  }
  return target;
}

function findAdjacents(nodeName, vertices, edges){
  let match;
  const target = [];
  edges.map(pair => {
    if (pair.includes(nodeName)){
      match = pair.find(name => name !== nodeName);
      match = vertices.find(vertex => vertex.name === match);
      if (match.discovered === null)
        target.push(match);
    }
  });
  return target;
}

function markdiscovered(head, adjacents){
  adjacents.map(a => a.discovered = head.discovered + 1);
}
