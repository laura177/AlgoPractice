function frequencySort(str){
    //object with key/value letter:frequency
    let frequency = {}; //O(n) memory
  
    //loop through the string and add to the obj
    for (let i = 0; i < str.length; i++){
      if (frequency[str[i]]){
        frequency[str[i]]++;
      } else {
        frequency[str[i]] = 1;
      }
    } 
    //time: O(n)
  
  //creating an array, looping through each letter and pushing [letter, obj[letter]]
  let arr = []; //O(n) memory
  
  for (let key in frequency){
    arr.push([key, frequency[key]]);
  }
  //time: O(n)
  
  //sort the array by value by array.sort((a,b) => b[1] - a[1])
  arr.sort((a,b) => b[1] - a[1]);
  //time: O(log n)
  
  //sortedStr
  let sortedStr = "";
  
  //count variable
  let count = 0;
  
  //loop through our array and for each item,let count = item[1]
  for (let i = 0; i < arr.length; i++){ 
    count = arr[i][1];
  //while count > 0  add item[0], decrement count
    while(count > 0){
      sortedStr += arr[i][0];
      count--;
    }
  }
  //both loops together = O(n) time
  
  //return string
  return sortedStr;
}

//frequencySort("tree");
//Output: "eert" 

//frequencySort("cccaaa");
//Output: "aaaccc" or "cccaaa"

//frequencySort("Aabb");
//Output: "bbAa" 