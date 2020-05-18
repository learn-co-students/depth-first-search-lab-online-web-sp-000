function depthFirstSearch(root, vertices, edges) {
    let visited = [root]
    let queue = [root]
    while (queue.length != 0) {
        let node = queue.pop()

        if (!node.discovered) {
            node.discovered = true
            let adjacent = findAdjacent(node.name, vertices, edges)
   
            for(let i = 0; i < adjacent.length; i++ ) {
                visited.push(adjacent[i])
                queue.push(adjacent[i])
            }
        }
    }
    return visited
}

function findAdjacent(name, vertices, edges){
    let sisters = []
    let adjacent = []
    for (let edge of edges) {
        if (edge.includes(name)) {
            for (let vertex of edge) {
                if (vertex != name) {
                    sisters.push(vertex)
                }
            }
        }
    }

    for (let vertex of vertices) {
        if (sisters.includes(vertex.name) && vertex.discovered == null) {
            adjacent.push(vertex)
        }
    }

    return adjacent
}

// let edges = [
// 	['14th&6th', '23rd&6th'],
// 	['23rd&6th', '34th&6th'],
// 	['34th&6th', '28th&Bwy'],
// 	['28th&Bwy', '23rd&Bwy'],
// 	['23rd&Bwy', '14th&Lex'],
// 	['14th&Lex', '23rd&Lex']
// ]

// let vertices = [
//   {name: '34th&6th', discovered: null},
//   {name: '23rd&6th', discovered: null},
//   {name: '14th&6th', discovered: null},
//   {name: '28th&Bwy', discovered: null},
// 	{name: '23rd&Bwy', discovered: null},
//   {name: '14th&Lex', discovered: null},
// 	{name: '23rd&Lex', discovered: null}
// ]