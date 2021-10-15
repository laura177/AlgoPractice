var countAndSay = function(n) {
    //base case: when n is 1, return 1
    if (n === 1) {
      return "1";
    } else {
  
    //result of the previous n value:
    let result = countAndSay(n-1);
    //create frequency counter = 1
    let count = 1;
    //create string to return
    let str = "";
  
    //loop through array starting at i = 1
    for (let i = 0; i < result.length; i++){
      let next = result[i+1];
    //if next number = result[i], add to frequency counter
    if (result[i] === next){
      count++;
    }
      //check if the next value even exists, if it doesn't we've hit the end of the loop so we want to add frequency + current value to string
      else if (!next){
        str += count + result[i]
      } else {
    //if next value is not equal to result[i], add the frequency + current result[i] to string 
      str += count + result[i];
   
    //AND set frequency back to 1 
      count = 1; 
    }
    }
    return str;
    }
  };

  //countAndSay(4) //output: 1211