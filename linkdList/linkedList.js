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
    // insert
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
        let current = this.head
        let seen = new Set()
        let prev = null
        while (current) {
            if (seen.has(current.value)) {
                current = prev
                current.next = current.next.next
            } 
            seen.add(current.value)
                prev = current
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
        while (current.next) {
            let sum = current.value + current.next.value
            let node = new Node(sum)
            node.next = current.next
            current.next = node
            current = current.next.next
        }
    }
    printWithoutPowerOfTwo() {
        function isPower2(val) {
            if (val < 1) return false
            while (val % 2 == 0) {
                val = val / 2
            }
            return val == 1
        }
        let current = this.head
        let ans = ""
        while (current) {
            if (!isPower2(current.value)) {
                ans += ` ${current.value} -> `
            }
            current = current.next
        }
        console.log(ans)
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
list.insert(10)
list.insert(25)
list.insert(10)
list.insert(40)
list.insert(15)
list.insert(25)
list.insert(60)
list.insert(30)
list.insert(40)
list.insert(75)
list.insert(20)
list.insert(15)
list.insert(90)
list.insert(30)
list.insert(50)
list.print()
list.swapByNum()
list.print()
list.printWithoutPowerOfTwo()
list.removeDup()
list.print()
list.addSumBetween()
list.print()
