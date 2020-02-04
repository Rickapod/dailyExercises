// Typically, an implementation of in-order traversal of a binary tree has O(h) space complexity, 
// where h is the height of the tree. 
// Write a program to compute the in-order traversal of a binary tree using O(1) space.

//sample tree
tree = {
  node = {
    nodeL = {
      nodeL = {
        nodeL = null,
        nodeR = {
            nodeL = {
              nodeL = null,
              nodeR = null
            },
            nodeR = {
              nodeL = null,
              nodeR = null
            }
        }
      },
      nodeR = {
        nodeL = null,
        nodeR =null,
      }
    },
    nodeR ={
      nodeL = {
        nodeL = null,
        nodeR =null,
      },
      nodeR = {
        nodeL = {
          nodeL = null,
          nodeR = null
        },
        nodeR = {
          nodeL = null,
          nodeR = null

        }
      }

    }

}}

//we need to create a recursive function



