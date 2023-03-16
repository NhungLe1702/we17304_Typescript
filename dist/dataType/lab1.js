// const sortLab1 = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] < array[j]) {
//         let x = array[i];
//         array[i] = array[j];
//         array[j] = x;
//       }
//     }
//   }
// };
// arrNum2.sort((a,b) => {
//     return a-b;
// })
// console.log(arrNum2);
var arrNum2 = [1, 13, 9, 2, 3, 5, 8];
var sortLab2 = function (array, compare) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            var _a = compare(array[i], array[j]), a_1 = _a[0], b = _a[1];
            array[i] = a_1;
            array[j] = b;
        }
    }
};
sortLab2(arrNum2, function (a, b) {
    if (a < b) {
        var x = a;
        a = b;
        b = x;
    }
    return [a, b];
});
console.log(arrNum2);
var arrNum3 = [8, 10, 9, 2, 5, 3, 6, 0];
var sortLab3 = function (array, compare) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (compare(array[i], array[j]) < 0) {
                var x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
        }
    }
};
sortLab3(arrNum3, function (a, b) { return a - b; });
console.log(arrNum3);
