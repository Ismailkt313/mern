class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null 
    }
}

class BST{
    constructor() { 
        this.root = null 
    }
    insert(value) {
        let node = new Node(value)
        if (!this.root) {
            this.root = node
            return
        } else {
            let current = this.root
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = node
                        return
                    } else {
                        current = current.left
                    }
                } else {
                    if (!current.right) {
                        current.right = node
                        return
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }
    removeDup(root = this.root) {
        if (!root) return
        this.removeDup(root.left)
        while (root.right && root.value == root.right.value) {
            root.right = this.remov(root.right,root.value)
        }
        this.removeDup(root.right)
    }
    remove(value) {
        if (!value) return
        this.root = this.remov(this.root, value)
    }
    remov(current,value) {
        if (!current || count >= k) {
            return null
        }
        if (current.value > value) {
            current.left = this.remov(current.left,value)
        } else if (current.value < value) {
            current.right = this.remov(current.right,value)
        } else {
            if (!current.left && !current.right) {
                return null
            }
            if (!current.left) {
                return current.right
            }
            if (!current.right) {
                return current.left
            }
            let successer = this.min(current.right)
            current.value = successer
            current.right = this.remov(current.right,successer)
        }
        return current
    }

    KthLarggest(k) {
        let count = 0 
        let larggest = -Infinity
        function inorder(current) {
            if (!current) return
            inorder(current.right)
            if (count == k) {
                larggest = current.value
            }
            count ++
            inorder(current.left)
        }
        inorder(this.root)
        console.log(larggest)
    }

    min(current = this.root) {
        if (!current.left) return current.value
        return this.min(current.left)

    }
    traverse(current = this.root) {
        if (!current) return
        this.traverse(current.left)
        console.log(current.value)
        this.traverse(current.right)
    }
}

let bst = new BST()
bst.insert(50)
bst.insert(80)
bst.insert(40)
bst.insert(30)
bst.insert(45)
bst.insert(50)
bst.insert(80)
bst.insert(40)
bst.insert(30)
bst.insert(45)
bst.traverse()
console.log("min")
console.log(`the min value is ${bst.min()}`)
// bst.remove(50)
console.log("after removal")
bst.traverse()
console.log("after removal")
// bst.removeDup()
bst.traverse()
console.log("kth larggest")
bst.KthLarggest()