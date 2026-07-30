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
    print() {
        for (let key in this.adjList) {
            console.log(`${key}  -> ${[...this.adjList[key]]}`)
        }
    }
}

let gp = new graph()
gp.addEdge(21, 56)
gp.addEdge(21, 45)
gp.addEdge(21, 34)
gp.addEdge(34, 56)
gp.addEdge(23, 65)
gp.addEdge(65, 76)
gp.addEdge(43, 54)
gp.addEdge(54, 76)
gp.addEdge(76, 56)
gp.addEdge(65, 56)
gp.removeEdge(65, 56)
gp.removeVertex(56)
gp.print()