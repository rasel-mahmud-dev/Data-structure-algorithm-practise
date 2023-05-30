const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] 
const target = 91

/*
** First Iteration
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
first 0
last 10
mid = 0 + 10 / 2 = 5

if target == mid[arr] = fulfill match break

if target > mid[arr] = true
    first = mid + 1 = 6;

else if target < mid[arr] = true
    last = mid - 1 = 4;
    
    
** second iteration
arr = [6, 7, 8, 9, 10] divided for access
first 6
last 10
mid = 6 + 10 / 2 = 8

if target == mid[arr] = fulfill match break

if target > mid[arr] = true
    first = mid + 1 = 9;

else if target < mid[arr] = true
    last = mid - 1 = 7;


** third iteration
arr = [9, 10] divided for access
first 9
last 10
mid = 9 + 10 / 2 = 9 (full int)

if target == mid[arr] = fulfill match break [***********]

if target > mid[arr] = true
    first = mid + 1 = 10;

else if target < mid[arr] = true
    last = mid - 1 = 8;
*/


function binary(arr, target) {
    let index = -1
    let first = 0;
    let last = arr.length - 1;

    let t = 0
    
    while (first <= last) {
        t++
        let mid = Math.ceil((first + last) / 2);

        if(target === arr[mid]){
            return mid;
        } else if (target > arr[mid]) {
            first = mid + 1 
        } else if (target < arr[mid]) {
            last = mid - 1 
        } 
    }
        
    return index;
}

function find(arr, target) {
    return arr.indexOf(target)
}


console.time("start")
console.log("result:", binary(arr, target));
console.timeEnd("start")

