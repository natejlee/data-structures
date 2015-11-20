var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var hasKey = false;
  var locationArray = this._storage.get(i);
  var allKVArray = _.flatten(locationArray);
  var remapArray = [];

  _.each(allKVArray, function(key, index, collection){
    if(index % 2 === 0 && key === k){
      hasKey = true;
      value = k;
      collection[index + 1] = v;
    }
  });

  if(hasKey === false){
    allKVArray.push(k,v);
  }

  _.each(allKVArray, function(value, index, collection){
    if(index % 2 === 0 && value !== undefined){
      remapArray.push([value, collection[index+1]]);
    }
  });

  this._storage.set(i, remapArray);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var locationArray = this._storage.get(i);
  var hashValue;
  var allKVArray = _.flatten(locationArray);

  _.each(allKVArray, function(key, index, collection){
    if(index % 2 === 0 && key === k){
      hashValue = collection[index + 1];
    }
  });

  return hashValue;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var locationArray = this._storage.get(i);
  var allKVArray = _.flatten(locationArray);
  var remapArray = [];

  _.each(allKVArray, function(value, index, collection){
    if(index % 2 === 0 && value === k){
      collection[index + 1] = null;
    }
  });

  _.each(allKVArray, function(value, index, collection){
    if(index % 2 === 0){
      remapArray.push([value, collection[index + 1]]);
    }
  });

  this._storage.set(i, remapArray);

};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: collistion = 0(n) insertion 0(1)
 retrieve: 0(n)
 remove: 0(n)
 */
