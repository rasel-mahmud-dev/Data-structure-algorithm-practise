const arr = new Array(100000).fill(1).map((_, index)=> index)
const target = 10000

function binary(arr, target) {
    let index = -1

    let mid = Math.round(arr.length / 2);

    while (true) {
        if (arr[mid] === target) {
            // console.log("result found index "+mid + " and result "+arr[mid]);
            index = mid
            break;
        } else if (target > arr[mid]) {
            mid = mid + 1
        } else if (target < arr[mid]) {
            mid = mid - 1
        } else {
            // console.log("not match");
            break;

        }
    }

    return index;
}

function find(arr, target) {
    return arr.indexOf(target)
}

console.time("binary-search")
console.log(binary(arr, target));
console.timeEnd("binary-search")

// 10000
// binary-search: 10.06ms


console.time("arr find")
console.log(find(arr, target));
console.timeEnd("arr find")
// 10000
// arr find: 0.288ms



