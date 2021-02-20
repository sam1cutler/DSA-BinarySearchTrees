const BinarySearchTree = require('./BinarySearchTree');
const bstHelpers = require('./BST-helpers');

const testBST1 = new BinarySearchTree();
//console.log(testBST1);

testBST1.insert(3,3);
testBST1.insert(1,1);
testBST1.insert(4,4);
testBST1.insert(6,6);
testBST1.insert(9,9);
testBST1.insert(2,2);
testBST1.insert(5,5);
testBST1.insert(7,7);

//console.log(testBST1);

const treeLength = bstHelpers.getLengthAnswer(testBST1);
//console.log(treeLength);

//console.log(bstHelpers.checkValidBST(testBST1));

//console.log(bstHelpers.checkBalanced(testBST1));

/*
const testBST2 = new BinarySearchTree();

testBST1.insert(6,6);
testBST1.insert(3,3);
testBST1.insert(1,1);
testBST1.insert(4,4);
testBST1.insert(9,9);
testBST1.insert(2,2);
testBST1.insert(5,5);
testBST1.insert(7,7);

console.log(bstHelpers.checkBalanced(testBST2));
*/

console.log(bstHelpers.kthLargest(testBST1, 3));