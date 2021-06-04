const TreeNode = require('./TreeNode')

class BinarySearchTree {
    constructor(){
        this.root = null
    }
    insert(data,node){
        if(!this.root){
            this.root = new TreeNode(data)
            return
        }
        if(data < node.data){
            if(!node.left){
                node.left = new TreeNode(data)
                return
            }
            this.insert(data,node.left)
        }
        else if(data > node.data){
            if(!node.right){
                node.right = new TreeNode(data)
                return
            }
            this.insert(data,node.right)
        }
    }
    inOrder(node,result){
        if(!node){
            return null
        }
        if(node.left){
            this.inOrder(node.left,result)
        }
        result.push(node.data)
        if(node.right){
            this.inOrder(node.right,result)
        }
        return result;
    }
    preOrder(node,result){
        if(!node){
            return null
        }
        result.push(node.data)
        if(node.left){
            this.preOrder(node.left,result)
        }
        if(node.right){
            this.preOrder(node.right,result)
        }
        return result;
    }
    postOrder(node,result){
        if(!node){
            return null
        }
        if(node.left){
            this.postOrder(node.left,result)
        }
        if(node.right){
            this.postOrder(node.right,result)
        }
        result.push(node.data)
        return result;
    }
    getHeight(node){
        if(!node){
            return 0 
        }
        return 1 + Math.max(this.getHeight(node.left),this.getHeight(node.right))
    }
    getNode(data){
        if(!data){
            throw new Error('input data cannot be null')
        }
        let currentNode = this.root
        while(!currentNode.data === data){
            if(data < currentNode.data){
                currentNode = currentNode.left
            }
            else{
                currentNode = currentNode.right
            }
        }
        return currentNode
    }
    levelOrderTraversal(){
        let level = 1
        let traversal = []
        while(this.getLevel(this.root,traversal,level))
        {
            level++
        }
        return traversal
    
    }
    getLevel(node, traversal, level){
        if(!node){
            return false
        }
        if(level === 1){
            traversal.push(node.data)
            return true
        }
        let left = this.getLevel(node.left,traversal, level-1)
        let right = this.getLevel(node.right,traversal, level-1)
        return left || right
    }
}
module.exports = BinarySearchTree