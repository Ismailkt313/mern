// function deboucing(data) {
//     let timer
//     return (
//         function (...msg) {
//             clearTimeout(timer)
//             timer = setTimeout(() => {
//                  console.log(...msg)

//             },4000)
//         }
//     )
// }
// let data = deboucing()
// data("dsdjhs")

// //

// let obj = {}
// let proxy = new Proxy(obj,{
//     set(property, data, value) {
//         property[data] = value
//         console.log("successfully value added")
//         return
//     },
//     get(pro, data) {
//         console.log(`this was the requrested data ${pro[data]}`)
//     }
// })
// proxy.name = "ismail"


// let arr = [4, 1, 1, -2, 3, 5,-4,-5];
// let k = 5;

// let maxLength = 0;
// let result = [];

// for (let i = 0; i < arr.length; i++) {

//     let sum = 0;

//     for (let j = i; j < arr.length; j++) {

//         sum += arr[j];

//         if (sum == k) {

//             let length = j - i + 1;

//             if (length > maxLength) {
//                 maxLength = length;
//                 result = arr.slice(i, j + 1);
//             }
//         }
//     }
// }

// console.log(result);




// function fun(str,i=0) {
//     if (i > str.length-1) return ''
//     return  fun(str,i+1) + str[i]
// }
// console.log(fun("afeeda"))


// function fb(val ) {
//     if(val <= 1) return val
//     return fb(val-1) + fb(val-2)
// }
// console.log(fb(6))

// let obj = {
//     name: "ismail",
//     age:19
// }

// let copy = structuredClone(obj)
// console.log(copy

