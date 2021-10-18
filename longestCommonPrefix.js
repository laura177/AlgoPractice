function longestCommonPrefix(strings){
      //sort the array, you can compare the first and last words to find the common prefix
  strs.sort()
  //store prefix as "" and add on to it as you find matching letters
  let prefix = "";
  let firstWord = strs[0];
  let lastWord = strs[strs.length-1];
  //iterate through the length of the first word, compare if firstWord[i] === lastWord[i]
  for(let i = 0; i < firstWord.length; i++){
    if(firstWord[i] === lastWord[i]){
      prefix += firstWord[i];
    } else {
      break
    }
  }
  return prefix
  //if matching, add to prefix string
  //if not, break
  //return the prefix string
}

//longestCommonPrefix(['flight', 'flower', 'flow']) output: 'fl'
// longestCommonPrefix(["dog","racecar","car"])// 
//Output: ""