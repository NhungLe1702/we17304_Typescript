//  generic là một là một loại công cụ cho
// phép bạn tạo các thành phần mã có thể sử dụng lại
// hoạt động với nhiều type khác nhau thay vì chỉ một type duy nhất.

// function showNumber(a: number) : number {
//     return a;
// }

// function showString(a: string) : string {
//     return a;
// }

// function showData<T>(a: T) :T {
//     return a;
// }

// const arrNum = [1,2,3,5,8,13];
// const arrStr = ['Hà', 'Nhung', 'Vân', 'Ngọc'];

// function we17304_map(arr: number[], callback:(item:number) => number) :number[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItemp = callback(arr[i]);
//         temp.push(newItemp);
//     }
//     return temp;
// }

// function we17304_map<T>(arr: T[], callback:(item: T) => T) :T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItemp = callback(arr[i]);
//         temp.push(newItemp);
//     }
//     return temp;
// }

// const result = we17304_map(arrStr, item => item + ' - we27304');
// console.log(result);

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

// arrNum2.sort((a,b) => {
//     return a-b;
// })
// console.log(arrNum2);
