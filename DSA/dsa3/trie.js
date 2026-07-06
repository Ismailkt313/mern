class Node {
    constructor() {
        this.child = {}
        this.isEnd = false
    }
}
class Trie {
    constructor() {
        this.root = new Node()
    }
    insert(value) {
        let current = this.root
        for (let val of value) {
            if (!current.child[val]) {
                current.child[val] = new Node()
            }
            current = current.child[val]
        }
        current.isEnd = true
    }
    autocomplete(pref) {
        let current = this.root
        for (let val of pref) {
            if (!current.child[val]) {
                return []
            }
            current = current.child[val]
        }
        let result = []
        this.collect(current, pref, result)
        console.log(result)
    }
    collect(node, word, result) {
        if (node.isEnd) {
            result.push(word)
        }
        for (let val in node.child) {
            this.collect(node.child[val], word + val, result)
        }
    }
    removehelp(node, word, index) {
        if (word.length == index) {
            if (!node.isEnd) return false
            node.isend = false
            return Object.keys(node.child).length === 0
        }
        let ch = node.child[word[index]]
        if (!ch) return false
        let AllDelete = this.removehelp(ch, word, index + 1)
        if (AllDelete) delete node.child[word[index]]
        return (
            Object.keys(node.child).length == 0 && !node.isEnd
        )
    }
    remove(word) {
        this.removehelp(this.root, word, 0)
    }
}
const tr = new Trie()
tr.insert("amal")
tr.insert("abhinav")
tr.insert("arun")
tr.insert("afeeda")
tr.insert("amritha")
tr.insert("ismail")
tr.insert("ijas")
tr.insert("jabbar")
tr.insert("jafer")

tr.remove("afeeda")
tr.autocomplete("a")






