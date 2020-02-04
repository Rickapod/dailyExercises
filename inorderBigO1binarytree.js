// Typically, an implementation of in-order traversal of a binary tree has O(h) space complexity, 
// where h is the height of the tree. 
// Write a program to compute the in-order traversal of a binary tree using O(1) space.

//sample tree
tree = {
  'node' : {
    "num" : 1,
    "nodeL" : {
      'num' : 2,
      "nodeL" : {
        'num' : 3,
        "nodeL" : null,
        "nodeR" : {
          'num' : 4,
          "nodeL" : {
            'num' : 5, 
            "nodeL" :  null,
            "nodeR" : null
          },
          "nodeR" : {
            'num' : 6,
            "nodeL" : null,
            "nodeR" : null
          }
        }
      },
      "nodeR" : {
        'num' : 7,
        "nodeL" : null,
        "nodeR" : null,
      }
    },
    "nodeR" : {
      'num' : 8,
      "nodeL" : {
        'num' : 9,
        "nodeL" : null,
        "nodeR" :null,
      },
      "nodeR" : {
        'num' : 10,
        "nodeL" : {
          'num' : 11,
          'nodeL' : null,
          'nodeR' : null
        },
        'nodeR' : {
          'num' : 12,
          'nodeL' : null,
          'nodeR' : null

        }
      }

    }

}}
//we need to create a recursive function
var traverse = function (node) {
  if (node == null) {
    return
  };
  traverse(node['nodeL']);
  console.log(node['num']);
  traverse(node['nodeR']);
}

console.log(traverse(tree['node']))


