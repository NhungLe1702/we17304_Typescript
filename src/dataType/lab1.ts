
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


const arrNum2 = [1, 13, 9, 2, 3, 5, 8];

const sortLab2 = function (
  array: number[],
  compare?: (a: number, b: number) => number[]
) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const [a, b] = compare(array[i], array[j]);
      array[i] = a;
      array[j] = b;
    }
  }
};

sortLab2(arrNum2, (a, b) => {
  if (a < b) {
    let x = a;
    a = b;
    b = x;
  }
  return [a, b];
});

console.log(arrNum2);

const arrNum3 = [8,10,9,2,5,3,6,0];

const sortLab3 = function (
  array: number[],
  compare?: (a: number, b: number) => number
) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (compare(array[i], array[j]) < 0) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }
};

sortLab3(arrNum3, (a, b) => a - b);
console.log(arrNum3);