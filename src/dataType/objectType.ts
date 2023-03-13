// array
const arr: Array<string> = ['A', 'B', 'C'];

const arr1: number[][] = [[1,2,3], [4,5,6]]; // ~ Array<Array<string>>

const arr2: string[] = ['ab', 'cd', 'ef'];

//any : Kiểu dữ liệu nào cx được, gán lại kiểu dữ liệu khác như js thuần.
let a: any = 3;
a='Nhung';
a = [1,2,3];

//tuples: cố định chiều dài của mảng
const tuple: [string, string, number] = ['a', 'b', 3];

// console.log(tuple[0]);

//enum
enum STATUS {PENDING, REJECTED, FULFILLED} ;

// console.log(STATUS.FULFILLED);
enum CODE {SUCCESS = 200, ERROR = 400, WAND = 500 };

// console.log(CODE);

// function
const upperCase = (a: string | number) => {
    if(typeof a == 'string') {
       console.log( a.toUpperCase());
    }
    a.toString().toUpperCase();
}

upperCase(10);
upperCase("nhung");






