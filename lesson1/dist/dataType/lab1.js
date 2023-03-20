var arrNumber = [209, 43, 53, 534];
function ascendingOrder(a, b) {
    return a - b;
}
var sapxep = function (arr, callback) {
    var _a;
    if (!callback) {
        callback = function (a, b) {
            if (a > b) {
                return 1;
            }
            else {
                return -1;
            }
        };
    }
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (callback(arr[j], arr[i]) < 0) {
                _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
            }
        }
    }
    return arr;
};
sapxep(arrNumber);
console.log(arrNumber);
