//Given 2 arrays, create a function that let's a
//user know (true/false) whether these two arrays
//contain any common items
//For example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false
//--------------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.

// function common(arr1, arr2){
//     for (let index1 = 0; index1 < arr1.length; index1++) {
//         for (let index = 0; index < arr2.length; index++) {

//             const element1 = arr1[index1];
//             const element2 = arr2[index];

//             if(element1 === element2){
//                 return true;
//             } 
//         }
//     }
//     return false;
// }
// common(array1, array2)
//O(a*b) = O(n^2)

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'r'];

// function common2(arr1, arr2) {
//     let map = {}

//     for (let i = 0; i < arr1.length; i++) {
//         if(!map[arr1[i]]){
//             const item = arr1[i]
//             map[item] = true
//         }
        
//     }
//     for (let j = 0; j < arr2.length; j++) {
//         if(map[arr2[j]]){
//             return true
//         }
        
//     }
//     return false
// }
//O(a+b)
common2(array1, array2)