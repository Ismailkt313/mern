class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
    }
    insert(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            return
        } else {
            node.next = this.head
            this.head = node
            return
        }
    }
    reverse() {
        let current = this.head
        let prev = null
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    removespecific(val) {
        let current = this.head
        while (current.next.value != val) {
            current = current.next
        }
        if (current.next.value != val) {
            return 'the value not found here'
        }
        current.next = current.next.next
    }
    removeDup() {
        let seen = new Set()
        let current = this.head
        let prev = null
        while (current) {
            if (seen.has(current.value)) {
                prev.next = current.next
            } else {
                seen.add(current.value)
                prev = current
            }
            current = current.next
        }
    }
    swapByNum() {
        let current = this.head
        while (current && current.next) {
            let value = current.value
            current.value = current.next.value
            current.next.value = value

            current = current.next.next
        }
    }
    addSumBetween() {
        let current = this.head
        while (current && current.next) {
            let sum = current.value + current.next.value
            let newNode = new Node(sum)
            newNode.next = current.next
            current.next = newNode
            current = newNode.next
        }
    }
    print() {
        let current = this.head
        let val = ""
        while (current) {
            val += ` ${current.value} ->`
            current = current.next
        }
        val += ' null'
        console.log(val)
    }
}

const list = new List()
list.insert(50)
list.insert(80)
list.insert(40)
list.insert(20)
list.insert(90)
list.insert(10)
list.insert(70)
list.insert(30)
list.insert(60)
list.print()
list.swapByNum()
list.print()
list.addSumBetween()
list.print()