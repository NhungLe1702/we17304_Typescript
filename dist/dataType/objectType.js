// array
var arr = ['A', 'B', 'C'];
var arr1 = [[1, 2, 3], [4, 5, 6]]; // ~ Array<Array<string>>
var arr2 = ['ab', 'cd', 'ef'];
//any : Kiểu dữ liệu nào cx được, gán lại kiểu dữ liệu khác như js thuần.
var a = 3;
a = 'Nhung';
a = [1, 2, 3];
//tuples: cố định chiều dài của mảng
var tuple = ['a', 'b', 3];
// console.log(tuple[0]);
//enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILLED"] = 2] = "FULFILLED";
})(STATUS || (STATUS = {}));
;
// console.log(STATUS.FULFILLED);
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["ERROR"] = 400] = "ERROR";
    CODE[CODE["WAND"] = 500] = "WAND";
})(CODE || (CODE = {}));
;
// console.log(CODE);
// function
var upperCase = function (a) {
    if (typeof a == 'string') {
        console.log(a.toUpperCase());
    }
    a.toString().toUpperCase();
};
upperCase(10);
upperCase("nhung");
