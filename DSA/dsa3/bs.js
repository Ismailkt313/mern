class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinaryTree{
    constructor() { 
        this.root = null
    }
    // insert 
    insert(value) {
        let node = new Node(value)
        let queue = [this.root]
        if (!this.root) {
            this.root = node
            return
        }
        while (true) {
            let current = queue.shift()
            if (!current.left) {
                current.left = node
                return
            }
            queue.push(current.left)
            if (!current.right) {
                current.right = node
                return
            }
            queue.push(current.right)
        }
    }
    // print value
    print() {
        if (!this.root) return
        let data = ''
        let queue = [this.root]
        while (queue.length) {
            let current = queue.shift()
            data+=` ${current.value} -> `
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        console.log(data)
    }
    larggestNumber() {
        let larggest = -Infinity
        let queue = [this.root]
        while (queue.length) {
            let current = queue.shift()
            if (current.value > larggest) {
                larggest = current.value
            }
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        return larggest
    }
    KthLarggest(k) {
        let data = []
        let queue = [this.root]
        while (queue.length) {
            let current = queue.shift()
            data.push(current.value)
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        let value = data.sort((a, b) => b - a)
        console.log(value.slice(0,k))
    }
}

let bt = new BinaryTree()

bt.insert(50)
bt.insert(80)
bt.insert(40)
bt.insert(30)
bt.insert(90)
bt.insert(20)
bt.insert(60)
bt.insert(10)
bt.insert(70)
bt.insert(100)
bt.insert(25)
bt.insert(55)
bt.insert(65)
bt.insert(85)
bt.insert(95)
bt.print()
console.log(bt.larggestNumber())
console.log("kth larggest value is")
bt.KthLarggest(4)