function romanToInt(string){
    const romanMap = {
      'I': 1,
      'IV': 4,
      'V': 5,
      'IX': 9,
      'X': 10,
      'XL': 40,
      'L': 50,
      'LC': 90,
      'C': 100,
      'CD': 400,
      'D': 500,
      'CM': 900,
      'M': 1000
    }
    let sum = 0;
  
    for(let i = 0; i < string.length; i++){
      let p1 = i;
      let p2 = i+1;
  
  
      //if the two characters together are in the map as the key 
      //(basically you're checking for 4s and 9s)
       //compare doubleRoman to key/value pairs to check if possibly a 4x or 9x, 
       if (romanMap[string[p1]+string[p2]]){
                  //add to total, i++ to skip the second i already counted in doubleRoman
                  sum+=romanMap[string[p1]+string[p2]];
                  i++;
              } else {
                  //if not, compare singleRoman to key/value pairs and add to total, 
                  //iterate normally
                  sum+=romanMap[string[p1]]; 
              }
  
    }
    return sum
  }
  
  // romanToInt("III") //3
  // romanToInt("IV") //4
  // romanToInt("XLII") //42
  // romanToInt("IX") //9
  // romanToInt("LIV") //54
  // romanToInt("MCMXCIV") //1994
  