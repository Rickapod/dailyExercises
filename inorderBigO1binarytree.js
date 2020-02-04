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
var root = tree['node']

//O(h) space travesal
// var traverse = function (node) {
//   if (node == null) {
//     return
//   };
//   traverse(node['nodeL']);
//   console.log(node['num']);
//   traverse(node['nodeR']);
// }

// console.log(traverse(root))

//O(1) space traversal

//In order to have constant space while traversing the tree we need traverse with our recursion or stacks
//We can do this using the Morris Travisal
var cur = root;
var pre = null;


while (cur != null) {  
     if (cur.nodeL) {  
       pre = cur.nodeL; 
       while (pre.nodeR && pre.nodeR != cur) {  
         pre = pre.nodeR;  
       }  
       if (pre.nodeR == null) { // set pre.nodeR to cur and move cur left  
         pre.nodeR = cur;  
         cur = cur.nodeL;  
       } else { // visit and revert the change  
         pre.nodeR = null;  
         console.log(cur.num) 
         cur = cur.nodeR;  
       }  
     } else { // visit and move to cur 
       console.log(cur.num);  
       cur = cur.nodeR;  
     }  
   }   

