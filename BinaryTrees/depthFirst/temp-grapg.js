// const depthFirstPrint = (graph, source) => {
//   //   console.log(graph);
//   const visited = new Set();
//   const stack = [source];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);
//     if(!visited.has(current)){
//         for (let neighbor of graph[current]) {
//             if (!visited.has(neighbor)) {
//               stack.push(neighbor);
//             }
//           }
//     }
//   }
// };


const depthFirstPrint=(graph,source)=>{
  for (let neighbor of graph[source]) {
    depthFirstPrint(graph,neighbor)
      console.log(neighbor);
  }
}


const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ['e'], // Fixed the graph data, c has no neighbors
    d: ["f"],
    e: [],
    f: [],
  };
  
depthFirstPrint(graph, "a");

