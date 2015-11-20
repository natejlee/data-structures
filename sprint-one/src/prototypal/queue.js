var Queue = function(){
  var storage = Object.create(queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   storage.start = 0;
   storage.end = 0;

   return storage;
};

queueMethods = {

  enqueue : function(value) {
    this[this.end] = value;
    this.end++;
  },
  dequeue : function(){

    if ( this.end - this.start !== 0 ) {
      var temp = this[this.start];
      delete this[this.start];
      this.start++;
      return temp;

    } else {
      return null;
    }

  },
  size : function() {
    return this.end - this.start;
  }

};

