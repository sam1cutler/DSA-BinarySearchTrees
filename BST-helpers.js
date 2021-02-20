const bstHelpers = {

    getLength(tree) {

        // two branches
        if (tree.left && tree.right) {
            const outputLeft = this.getLength(tree.left)
            const outputRight = this.getLength(tree.right)
            const outputPreTicks = outputLeft.concat(outputRight);
            let output = [];
            for (let i=0 ; i<outputPreTicks.length ; i++) {
                output.push(outputPreTicks[i] + 1);
            }
            return output
        } 
        // only a left branch
        else if (tree.left) {
            const outputPreTicks = this.getLength(tree.left);
            let output = [];
            for (let i=0 ; i<outputPreTicks.length ; i++) {
                output.push(outputPreTicks[i] + 1);
            }
            return output
        }
        // only a right branch
        else if (tree.right) {
            const outputPreTicks = this.getLength(tree.right)
            let output = [];
            for (let i=0 ; i<outputPreTicks.length ; i++) {
                output.push(outputPreTicks[i] + 1);
            }
            return output
        }
        // at a leaf = BASE CASE
        else {
            return [1];
        }
    },

    getLengthAnswer(tree) {

        const branchLengthArray = this.getLength(tree);

        let winner = 0;

        for (let i=0 ; i<branchLengthArray.length ; i++) {
            if (branchLengthArray[i] > winner) {
                winner = branchLengthArray[i]
            }
        }

        return `The height of this BST is ${winner}.`;

    },

    checkValidBST(tree) {

        let status = 'It is a valid binary search tree.';

        // traverse the tree, checking validity of every node:

        // two branches
        if (tree.left && tree.right) {
            if (
                tree.left.key > this.key 
                || tree.right.key < this.key 
                || tree.left.key > tree.right.key
            ) {
                status = 'This is NOT a valid binary search tree.'
                return status;
            } else {
                this.checkValidBST(tree.left);
                this.checkValidBST(tree.right);
            }
        } 
        // only a left branch
        else if (tree.left) {
            if (tree.left.key > this.key) {
                status = 'This is NOT a valid binary search tree.'
                return status;
            } else {
                this.checkValidBST(tree.left);
            }
        }
        // only a right branch
        else if (tree.right) {
            if (tree.right.key < this.key) {
                status = 'This is NOT a valid binary search tree.'
                return status;
            } else {
                this.checkValidBST(tree.right);
            }
        }

        return status;
    },

    checkBalanced(tree) {

        const branchLengthArray = this.getLength(tree);

        for (let i=0 ; i<branchLengthArray.length ; i++) {
            for (let j=0; j<branchLengthArray.length ; j++) {
                if (i !== j) {
                    const branchLengthDifference = Math.abs(branchLengthArray[i] - branchLengthArray[j]);
                    if (branchLengthDifference > 1) {
                        return 'unbalanced';
                    }
                }
            }
        }

        return 'balanced';

    },

    kthLargest2(tree, values=[]) {

        // 1) Handle right branch, if it exists
        if (tree.right) {
            values = this.kthLargest2(tree.right, values);
        }

        // 2) Handle node
        values.push(tree.key);
    
        // 3) Handle left branch, if it exists
        if (tree.left) {
            values = this.kthLargest2(tree.left, values);
        }
        
        return values;

    },

    kthLargest(tree, k) {

        const valuesArray = this.kthLargest2(tree);

        console.log(valuesArray);
    
        const answer = valuesArray[k-1];

        return `The ${k}th largest value in the BST is ${answer}.`;

    }

}

module.exports = bstHelpers;