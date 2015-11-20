var BinarySearchTree = function(value){
  var node = {};
  node.value = value;
  node.left;
  node.right;
  _.extend(node, BinarySearchTreeMethods);

  return node;
};

BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value){
  var newNode = BinarySearchTree(value);

  var searchTree = function(innerNode){

   if(innerNode.left){
      searchTree(innerNode.left);
    }

    if(innerNode.right){
      searchTree(innerNode.right);
    }

    if(innerNode.value > value && innerNode.left === undefined){
      innerNode.left = newNode;
    }
    if(innerNode.value < value && innerNode.right === undefined){
      innerNode.right = newNode;
    }

  };

  searchTree(this);
};

BinarySearchTreeMethods.contains = function(target) {
  var truthy = false;

  var searchTree = function (value) {
    if (value === target) {
      truthy = true;
    }
    _.each(value,function(element){
      searchTree(element);
    });
  };

  searchTree(this);

  return truthy;
};

BinarySearchTreeMethods.depthFirstLog = function(cb){

  var searchTree = function(innerNode){

    if(innerNode !== undefined){
      cb(innerNode.value);
      searchTree(innerNode.left);
      searchTree(innerNode.right);
    }

  };
  searchTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
   insert: search for pos - 0(log n); act of insertion - 0(1)
   contains: 0(n)
   depthFirstLog: 0(n)
 */

