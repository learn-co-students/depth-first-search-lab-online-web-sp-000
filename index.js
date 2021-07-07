
function depthFirstSearch(rootNode, vertices, edges){
  let stack = []; //create temporary stack
  stack.push(rootNode); //add all vertices to the stack
  let visited = [rootNode]; //create final array you will output
  while (stack.length != 0){
    let poppedNode = stack.pop();
    if (!poppedNode.discovered){
      poppedNode.discovered = true
      findAdjacent(poppedNode.name, vertices, edges).forEach(function(node){
        visited.push(node);
        stack.push(node);
      })
    }
  }
  return visited;
}


//should return an array of adjacent nodes
function findAdjacent(nodeName, vertices, edges){
  //the following returns an array for all the elements that pass the test in the function (vertex is next to edge)
  return edges.filter(function(edge){return edge.includes(nodeName)}) //first filters edges that have the nodeNames in them
              .map(function(edge){return edge.filter(function(node){return (node != nodeName)})[0]}) //maps edges where nodes are not equal in name
              .map(function(name){return findNode(name, vertices)}) //maps the nodes that match vertex names
              .filter(function(node){return !node.discovered}) //filters all the ones that aren't discovered yet
}


//returns vertices that have the given node name
function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName;
  })
}
