class graph {
    constructor() {
        this.adjList = {}
    }
    addvertex(value) {
        if (!this.adjList[value]) {
            this.adjList[value] = new Set()
        }
    }
    addEdge(v1, v2) {
        let obj = this.adjList
        if (!obj[v1]) {
            this.addvertex(v1)
        }
        if (!obj[v2]) {
            this.addvertex(v2)
        }
        obj[v1].add(v2)
    }
    removeEdge(v1, v2) {
        this.adjList[v1].delete(v2)
    }
    removeVertex(val) {
        for (let key in this.adjList) {
            if (this.adjList[key].has(val)) {
                this.adjList[key].delete(val)
            }
        }
        delete this.adjList[val]
    }
    dfs(start) {
        let seen = new Set()
        let fun = (start, seen) => {
            console.log(start)
            seen.add(start)
            for (let val of this.adjList[start]) {
                if (!seen.has(val)) {
                    fun(val, seen)
                }
            }
        }
        fun(start, seen)
    }
    bfs(start) {
        const queue = [start]
        let seen = new Set()
        seen.add(start)
        while (queue.length) {
            let value = queue.shift()
            console.log(value)
            for (let val of this.adjList[value]) {
                if (!seen.has(val)) {
                    queue.push(val)
                    seen.add(val)
                }
            }
        }
    }
    pathExisists(start, end) {
        if (!this.adjList[start] || !this.adjList[end]) {
            return false
        }
        const queue = [start]
        let seen = new Set()
        
        seen.add(start)
        while (queue.length) {
            let value = queue.shift()
            if (value == end) {
                return true
            }
            for (let val of this.adjList[value]) {
                if (!seen.has(val)) {
                    queue.push(val)
                    seen.add(val)
                }
            }
        }
        return false
    }
    print() {
        for (let key in this.adjList) {
            console.log(`${key}  -> ${[...this.adjList[key]]}`)
        }
    }
}

let gp = new graph()
gp.addEdge(21, 56)
gp.addEdge(21, 56)
gp.addEdge(21, 34)
gp.addEdge(34, 56)
gp.addEdge(23, 65)
gp.addEdge(65, 76)
gp.addEdge(43, 54)
gp.addEdge(54, 76)
gp.addEdge(76, 56)
gp.addEdge(65, 56)
gp.addEdge(56, 65)
gp.removeEdge(65, 56)
// gp.removeVertex(56)
gp.print()
console.log("====================================================")
gp.dfs(21)
console.log("====================================================")
gp.bfs(21)
console.log("====================================================")
console.log(gp.pathExisists(21, 23))
console.log("============================")