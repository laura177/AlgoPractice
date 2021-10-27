var RandomizedSet = function() {
    this.set = [];
};

RandomizedSet.prototype.insert = function(val) {
    //check this.set to see if value is included
    if (this.set.includes(val)){
      return false;
    } else {
      this.set.push(val);
      return true;
    }
    //return true if not 
    //return false if present
};

RandomizedSet.prototype.remove = function(val) {
    if (this.set.indexOf(val) >= 0){
      //splice it
      this.set.splice(this.set.indexOf(val),1);
      return true;
    } else {
      return false;
    }
};

RandomizedSet.prototype.getRandom = function() {
  let randomIndex = Math.floor(Math.random()*this.set.length);
  return this.set[randomIndex];
    //Math.random() a random number between 0 and 1 -> multiply by length of the set to get a random number between 0 and the last index of the set -> math.floor to round down
};

/*
input:
["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
[[],[1],[2],[2],[],[1],[2],[]]

ouput:
[null,true,false,true,1,true,false,2]
*/