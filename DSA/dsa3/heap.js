class heap {
    constructor() {
        this.table = []
    }
    insert(value) {
        this.table.push(value)
        this.heapfyup(this.table.length - 1)
    }
    heapfyup(index) {
        let parent = Math.floor((index - 1) / 2)
        if (parent >= 0 && this.table[parent] < this.table[index]) {
            [this.table[parent], this.table[index]] = [this.table[index], this.table[parent]]
            this.heapfyup(parent)
        }
    }
    remove() {
        this.table[0] = this.table.pop()
        this.heapdown(0, this.table.length, this.table)
        // this was the proper method for removing
    }
    heapsort(arr) {
        for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
            this.heapdown(i, arr.length, arr)
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]]
            this.heapdown(0, i, arr)
        }
    }
    heapdown(index, length, arr) {
        let left = (index * 2) + 1
        let right = (index * 2) + 2
        let smallest = index
        if (left < length && arr[left] > arr[smallest]) {
            smallest = left
        }
        if (right < length && arr[right] > arr[smallest]) {
            smallest = right
        }
        if (index != smallest) {
            [arr[smallest], arr[index]] = [arr[index], arr[smallest]]
            this.heapdown(smallest, length, arr)
        }
    }
}
let hp = new heap()
hp.insert(50)
hp.insert(20)
hp.insert(70)
hp.insert(80)
  
hp.insert(60)
hp.insert(30)
hp.insert(90)
hp.insert(20)
hp.remove()
hp.remove()
hp.remove()
hp.remove()
console.log(hp.table)
let arr = [87, 4, 67, 87, 4323, 54, 67, 899, 6, 543423, 54, 67, 89]
hp.heapsort(arr)
console.log(arr)