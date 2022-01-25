/*
Breadth First Search Exercise - traversing a graph
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
create a new array to store visited nodes


*/