const { test, expect } = require('@jest/globals')
const BinarySearchTree = require('../bst/BinarySearchTree')
test('insertion and in-order traversal',() => {
    const bst = new BinarySearchTree();
    const testData = [12,13,6,7,19,15,1,0]
    testData.forEach(data=>bst.insert(data,bst.root))
    expect(bst.inOrder(bst.root,[]).map(data=>`${data}`).toString()).
    toBe('0,1,6,7,12,13,15,19')
})
test('insertion and pre-order traversal',() => {
    const bst = new BinarySearchTree();
    const testData = [12,13,6,7,19,15,1,0]
    testData.forEach(data=>bst.insert(data,bst.root))
    expect(bst.preOrder(bst.root,[]).map(data=>`${data}`).toString()).
    toBe('12,6,1,0,7,13,19,15')
})