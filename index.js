const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91] 

let firstIndex = 0; 
let lastIndex = arr.length - 1;

const target = 91

while(firstIndex <= lastIndex){
    // middle point of array which calc via (firstIndex + lastIndex) / 2
    let mid = Math.ceil((firstIndex + lastIndex) / 2);
    // if arr mid element is equal to target then break loop and return result.
   if(target === arr[mid]){
        console.log("Found ");
        break;

        // if target element if greater than middle element then 
        // assain this middle element (with exclute this mid index) to first index and last is same to array total len
    } else if(target > arr[mid]) {
        firstIndex = mid + 1

        
        // if target element if less than middle element then 
        // assain this middle element (with negative this mid one) to last index and first is 0
    } else if(target < arr[mid]) {
        lastIndex = mid  - 1
    }
}
