var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = new Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){
  var truthy = false;
  var searchTree = function (node) {
    if (node.value === target) {
      truthy = true;
    }
    _.each(node.children,function(element){
      searchTree(element);
    });
  };
  searchTree(this);

  return truthy;

};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild: 0(1)
  contains: 0(n)

 */
