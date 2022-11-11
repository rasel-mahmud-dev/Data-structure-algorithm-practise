# Binary Search

![2022-11-11_190951.jpg](assets/2022-11-11_190951.jpg)

Binary Search is a searching algorithm for finding an element's position in a sorted array.
In this algorithm, the element is always searched in the middle of a portion of a sorted array.

****How Binary Search Works?****

For a binary search to work, it is mandatory for the target array to be sorted. The following is our sorted array and let us assume that we need to search the location of value 10 using binary search.

it divided our sorted array in to two part until condition matched.

### Code Execution Description

SortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 10

### First Iteration

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
first 0
last 10
mid = 0 + 10 / 2 = 5

if target == mid[sortedArr] = fulfill match break

if target > mid[sortedArr] = true
first = mid + 1 = 6;

else if target < mid[sortedArr] = true
last = mid - 1 = 4;

### second iteration

arr = [6, 7, 8, 9, 10] divided for access
first 6
last 10
mid = 6 + 10 / 2 = 8

if target == mid[sortedArr] = fulfill match break

if target > mid[sortedArr] = true
first = mid + 1 = 9;

else if target < mid[sortedArr] = true
last = mid - 1 = 7;

### Third iteration

arr = [9, 10] divided for access
first 9
last 10
mid = 9 + 10 / 2 = 9 (full int)

if target == mid[sortedArr] = fulfill match break [***********]

if target > mid[sortedArr] = true
first = mid + 1 = 10;

else if target < mid[sortedArr] = true
last = mid - 1 = 8;

## Implement with javascript

```jsx
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const target = 10

function binary(arr,target) {
    let index = -1
    let first = 0;
    let last =arr.length - 1;

    let t = 0

    while (first <= last) {
        t++
        let mid = Math.ceil((first + last) / 2);

        if(target ===arr[mid]){
            return mid;
        } else if (target >arr[mid]) {
            first = mid + 1
        } else if (target <arr[mid]) {
            last = mid - 1
        }
    }

    return index;
}

console.time("start")
console.log("result:", binary(sortedArr, target));
console.timeEnd("start")
```
Result
```shell
result: 9
start: 4.087ms
```