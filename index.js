procedure DFS-interactive(V, G):
    S = new Stack()
    S.push(V)
    explored = new Set()
    while S is not empty:
        v = S.pop()
        if v in explored: continue
        if current_node == G: return success

        for neighbor in graph.get_neigbhors(G):
            S.push(neighbor)
        explored.add(G)
