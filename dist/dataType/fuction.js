// 1. Function declaration
function func1() {
    console.log('function1');
}
var func2 = function () {
    console.log('function2');
};
var func3 = function () {
    console.log('function3');
};
// 2. Function return
function func4() {
    return;
}
function sum(a) {
    return a;
}
function func5() {
    console.log('Hello world');
}
function func6() {
    while (true) {
    }
}
// 3. Function
function func7() {
    var error = new Error("Something went wrong");
    throw error;
}
function divide(a, b) {
    if (b) {
        return a - b;
    }
    else {
        return a;
    }
}
divide(10);
// 4. Rest parameter
var showClasses = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "Sinh vi\u00EAn ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classes.join(", "));
};
console.log(showClasses("Anh Ngọc", "Typescript", "Nodejs"));
console.log(showClasses("Hào", "Typescript"));
// 5. Callback
// Dùng js thuần
var num_arr = [2, 3, 4];
var temp = num_arr.map(function (item) {
    return item * 2;
});
console.log(temp);
// Dùng callback typescript
var we17304_map = function (arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
};
var result = we17304_map(num_arr, function (item) {
    return item * item;
});
console.log(result);
