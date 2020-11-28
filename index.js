function depthFirstSearch(rootNode, vertices, edges)
{
  let stack = [rootNode]
  let visited = [rootNode]
  
  while (stack.length !== 0)
  {
    let currVertex = stack.pop()
    //console.log(stack)

    if (!currVertex.discovered)
    {
      currVertex.discovered = true
      let adj = findAdjacent(currVertex.name, vertices, edges)
      //console.log(adj)
      addTo(adj, stack)
      addTo(adj, visited)
      //console.log(stack)
      //visited.push(currVertex)
    }
  }
  //console.log(visited)
  return visited
}

function findAdjacent(node, vertices, edges)
{
  
  var adjArray = []
  var foundNode
  var adjObj
  

      
  for (var i = 0; i < edges.length; i++)
  {

    if (edges[i][0] === node )
    {
      adjObj = getObj(vertices, edges[i][1]) 
      if(adjObj.discovered === null)
      {
        adjArray.push(adjObj);
      }
    }
    else if (edges[i][1] === node)
    {
      adjObj = getObj(vertices, edges[i][0]) 
      if(adjObj.discovered === null)
      {
        adjArray.push(adjObj);
      }
    }
  }

  return adjArray
  
}

function getObj(vertices, name)
{

  return vertices.find(element => (element.name === name));
  
}


function addTo(vertices, list)
{
  for(var i = 0; i < vertices.length; i++)
  {
    list.push(vertices[i])
  }
}