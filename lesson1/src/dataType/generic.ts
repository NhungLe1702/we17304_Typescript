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


