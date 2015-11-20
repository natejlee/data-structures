var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null && list.tail === null){
      list.head = new Node(value);
       list.tail = list.head;
    }

    if (list.head) {
      list.tail = new Node(value);
      list.head.next = list.tail;
    }
  };

  list.removeHead = function() {
    list.head = list.head.next;

    return list.head.value;
  };

  list.contains = function(target){
    for(key in list){
      if(list[key]=== target){
        return true;
      }
    }
    if(list.head.value === target){
      return true;
    }
    if(list.tail.value === target ){
      return true;
    }
    return false;

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
  Complexity: What is the time complexity of the above functions?
  addToTail: 0(1)
  removeHead: 0(1)
  contains: 0(n)
 */
