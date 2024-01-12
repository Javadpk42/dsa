class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = new Set();
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList[vertex2]) {
        this.addVertex(vertex2);
      }
      this.adjacencyList[vertex1].add(vertex2);
      this.adjacencyList[vertex2].add(vertex1);
    }
  
    removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].delete(vertex2);
      this.adjacencyList[vertex2].delete(vertex1);
    }
  
    removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        return;
      }
      for (let adjacentVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
    }
  
    hasEdge(vertex1, vertex2) {
      return (
        this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)
      );
    }
  
    display() {
      for (let vertex in this.adjacencyList) {
        console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
      }
    }
  //   BFS(start){
  //     const queue=[start],result=[]
  //     const visited={}
  //     while(queue.length){
          
  //         const vertex= queue.shift()
  //         if(!visited[vertex]){

  //             visited[vertex]=true
  //             result.push(vertex)
  //             for(let edge of this.adjucency[vertex]){
  //                 queue.push(edge)
  //             }
  //         }
          
  //     }
  //     return result
  // }

  // DFS(start){
  //     const stack=[start],result=[],visited={}
  //     while(stack.length){
  //         const vertex= stack.pop()
  //         if(!visited[vertex]){

  //             visited[vertex]=true
  //             result.push(vertex)
  //             for(const edje of this.adjucency[vertex]){
  //                 stack.push(edje)
  //             }
             
  //         }
  //     }
  //     return result
  // }
  BFS(start) {
    const queue = [start],
      result = [];
    const visited = {};
    while (queue.length) {
      const vertex = queue.shift();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        for (let edge of this.adjacencyList[vertex]) {
          queue.push(edge);
        }
      }
    }
    return result;
  }

  DFS(start) {
    const stack = [start],
      result = [],
      visited = {};
    while (stack.length) {
      const vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        for (const edge of this.adjacencyList[vertex]) {
          stack.push(edge);
        }
      }
    }
    return result;
  }

  }
  
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "C");
  // graph.display();
  // graph.removeEdge("A", "B");
  // graph.display();
  // graph.removeVertex("A");
  graph.display();
  console.log(graph.BFS('A'))
  