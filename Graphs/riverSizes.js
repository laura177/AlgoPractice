/*
Understand adjacency matrix implementation of graphs

You are given a two-dimensional array (a matrix) of potentially 
unequal height and width that contains only values of 0 and 1. 
Each 0 represents land, and each 1 represents part of a river. 
A river consists of any number of 1s that are either horizontally 
or vertically adjacent, but not diagonally adjacent. The number of 
adjacent 1s forming a river determine it's size.

Write a function that returns an array of the sizes of all rivers 
represented in the input matrix. The sizes do not need to 
be in any particular order.

Examples:
const matrix = [
    [1, 0, 1, 0],
    [0, 1, 1, 1],
    [1, 0, 0, 1]
]
riverSizes(matrix) --> should return [1, 1, 5]

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]
riverSizes(matrix) --> should return [1, 2, 2, 2, 5]
*/

//Iterative Solution
/*
Main function and 2 helper functions:
Main func: creates a matrix to track seen nodes, 
           iterates over the matrix and checks if a node was already seen
Helper #1: keeps track of river's length, while checking and updating if a node has been seen.
Helper #2: checks neighboring nodes and readys them for processing


*/
function riverSizes(matrix) {
  // Write your code here.
	//init sizes
	//init visited supplementary matrix - copy matrix and set each elem to false.
	const sizes = [];
	const visited = matrix.map(row => row.map (item => false))
	
	for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j < matrix[0]; j++){
			if(visited[i][j]) continue;
			//if it's not visited, call on helper function to traverse current node
			traverseNode(i, j, matrix, visited, sizes)
		}
	}
	return sizes
}

function traverseNode(i, j, matrix, visited, sizes){
	//init current river size = 0;
	let currentRiverSize = 0;
	//each value in this array is a node we need to explore
	//the node we are exploring is located at [i,j]
	//this is a stack we are pushing to, then pop them one by one
	let nodesToExplore = [[i, j]];
	//DFS
	while(nodesToExplore.length){
		//pop out the final value in this array
		const currentNode = nodesToExplore.pop();
		i = currentNode[0];
		j = currentNode[1];
		if(visited[i][j]) continue;
		//if not visited, set to true
		visited[i][j] = true
		
		//if it's a 0, it's not a zero, don't add 
		//if it's a piece of land that we marked as true, skip it
		if(matrix[i][j] === 0) continue;
		currentRiverSize++;
		//set unvisited neighbors of current node to equal the result of helper function
		const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)
		for(let neighbor in unvisitedNeighbors){
			nodesToExplore.push(neighbor)
		}
	}
	if(currentRiverSize > 0){
		sizes.push(currentRiverSize)
	}
}

function getUnvisitedNeighbors(i, j, matrix, visited){
	let unvisitedNeighbors = [];
	//we need to check that the 4 neighbors are valid
	//look at neighbor above us
	if(i > 0 && !visited[i-1]){
		unvisitedNeighbors.push([i-1, j])
	}
	//look at neighbors below us
	if(i < matrix.length-1 && !visited[i + 1][j]){
		unvisitedNeighbors.push([i+1, j])
	}
	//look at neighbors to the left
	if(j > 0 && !visited[i][j-1]){
		unvisitedNeighbors.push([i, j-1])
	}
	//look at neighbors to the right
	if(j < matrix[0].length && !visited[i][j+1]){
		unvisitedNeighbors.push([i, j+1])
	}
	return unvisitedNeighbors
}

/*
const inputMatrix = [
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 0, 1]
]
//should return [1,1,5]
riverSizes(inputMatrix)
*/



//recursive
function recursiveRiverSizes(matrix){
  const sizes = [];

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === 1){
        sizes.push(recursiveVisitRiver(matrix, i, j))
      }
    }
  }
}

function recursiveVisitRiver(matrix, i, j){
  //base case: validate i and j inputs first, then check if node value is 0
  if(i >= matrix.length /*last row*/ || j >= matrix[0].length /*last column*/ || i < 0 /*first row*/ || j < 0 /*first column*/|| !matrix[i][j]/*no rows or columns*/){
    return 0
  }
  //mutate current matrix, changing visited nodes to value 0 to indicate it's been visited
  matrix[i][j] = 0;
  //chain recursive calls to one another to check the four directions and return the final size(size starting with val of 1)
  return 1 + recursiveVisitRiver(matrix,i+1,j) + recursiveVisitRiver(matrix,i-1,j) + recursiveVisitRiver(matrix,i,j+1) + recursiveVisitRiver(matrix,i,j-1);
}