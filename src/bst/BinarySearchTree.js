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
}
module.exports = BinarySearchTree