

var Graph = function(){
 this.nodeList = {};

};

Graph.prototype.addNode = function(node){
  this.nodeList[node] = {
    value : node,
    edges : {}
  };

};

Graph.prototype.contains = function(node){
  var hasNode = false;
  _.each(this.nodeList, function(value, key){
    if(key === node){
      hasNode = true;
    }
  });
  return hasNode;
};

Graph.prototype.removeNode = function(node){
  var nodeHolder = this.nodeList[node];
  delete this.nodeList[node];
  _.each(nodeHolder.edges, function(value, key){
    delete this.nodeList[key][edges][node];
  });

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var hasNode = false;

  _.each(this.nodeList[fromNode].edges, function(value, key){
    if(key === toNode){
      hasNode = true;
    }
  });
  return hasNode;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodeList[fromNode].edges[toNode] = this.nodeList[toNode];
  this.nodeList[toNode].edges[fromNode] = this.nodeList[fromNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var node = this.nodeList[fromNode];

  if(node.edges[toNode]){
    delete node.edges[toNode];
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodeList, function(val){
    cb(val.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
   addNode: 0(1)
   contains: 0(n)
   removeNode: 0(1)
   hasEdge: 0(n)
   addEdge: 0(1)
   removeEdge: 0(1)
   forEachNode: 0(n)
 */



