const arrNumber = [209, 43, 53, 534]
function ascendingOrder(a: number, b: number): number {
    return a - b;
}
const sapxep = function <T>(arr: T[], callback?: (a: T, b: T) => number): T[] {
    if(!callback) {
        callback = (a: T, b: T): number => {
            if(a > b) {
                return 1
            } else {
                return -1
            }
        }
    }
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (callback(arr[j], arr[i]) < 0) {
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }
    return arr
}

sapxep(arrNumber);
console.log(arrNumber);