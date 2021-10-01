function minimumWaitingTime(queries){

    //sorting the queries in ascending order to make sure the largest run 
    //time is at the end (so we don't need to count it)
    queries = queries.sort((a, b) => a-b);
  
    let time = 0;
  
    for(let i = 0; i < queries.length; i++){
  
    //before a query can start, all previous queries have to finish running, 
    //meaning that every query's run time can be counted for every subsequent query 
    //--> the duration of the current query happens for each remaining query 
    //(so multiply the duration of the current query by the number of queries left)
  
      let queriesLeftToRun = (queries.length - 1)-i;
      let currentIndexRunTime = queries[i];
      time += (queriesLeftToRun * currentIndexRunTime);
      //add that to the total time
    }
    return time
  }
  //minimumWaitingTime([3, 2, 1, 2, 6])