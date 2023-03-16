// 1. Function declaration

function func1() {
    console.log('function1');
}

const func2 = function() {
    console.log('function2');
}

const func3 =() => {
    console.log('function3');
}

// 2. Function return
function func4(): string { // ko trả về gì sẽ tự động trả về undefine
    return;
}

function sum(a:number):number {
    return a;
}

function func5():void {// ko cần giá trị trả về
    console.log('Hello world');
}

function func6():never {// 
    while(true) {

    } 
}

// 3. Function
function func7():never {
    const error = new Error("Something went wrong");
    throw error;
}

function divide(a:number, b?:number):number { // sử dụng ? để biến truyền vào ko cần thiết phải có.
    if(b) {
        return a-b;
    } else {
        return a;
    }
}

divide(10);

// 4. Rest parameter

const showClasses = (name: string, ...classes: string[]): string => {
    return `Sinh viên ${name} học lớp ${classes.join(", ")}`
}

console.log(showClasses("Anh Ngọc", "Typescript", "Nodejs"));
console.log(showClasses("Hào", "Typescript"));

// 5. Callback

// Dùng js thuần
const num_arr = [2,3,4];
const temp = num_arr.map((item) => {
    return item * 2;
})

console.log(temp);

// Dùng callback typescript
// const we17304_map = function(arr:number[], callback?:(item:number) => number) {
//     const temp = [];
//     for(let i = 0; i< arr.length; i++) {
//         const newItem = callback(arr[i]);
//         temp.push(newItem);
//     }
//     return temp;
// }

// const result = we17304_map(num_arr, (item) => {
//     return item * item;
// })

// console.log(result);



