var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var storage = Object.create(stackMethods);
  storage.len = 0;

  return storage;
};


var stackMethods = {
  push : function(value){
    this[this.len] = value;
    this.len++;
  },
  pop : function(){
    if(this.len > 0){
      this.len--;
      var temp = this[this.len];
      return temp;
    } else {
      return null;
    }

  },
  size : function(){
    return this.len;
  }

};


