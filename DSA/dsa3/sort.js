
function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let midd = Math.floor((arr.length/2))
    let left = mergeSort(arr.slice(0, midd))
    let right = mergeSort(arr.slice(midd))
    return merge(left,right)
}

function merge(left, right) {
    let arr = []
    let i = 0
    let j = 0
    while (left.length > i && right.length > j) {
        if (right[j] > left[i]) {
            arr.push(left[i])
            i++
        } else {
            arr.push(right[j])
            j++
        }
    }
    while (left.length > i) {
        arr.push(left[i])
        i++
    }
    while (right.length > j) {
        arr.push(right[j])
        j++
    }
    return arr
}
function sorting(arr) {
    let sortArr = []
    for (let i = 1; i < arr.length; i += 2){
        sortArr.push(arr[i])
    }
    let ans = mergeSort(sortArr)
    let j = 0
    for (let i = 1; i < arr.length; i+=2){
        arr[i] = ans[j]
        j++
    }
    return arr
}
let arr = [90, 8, 5, 23, 56, 89, 4, 56, 8,32,14,98,37,18.9,8,5,6,1]
console.log(sorting(arr))