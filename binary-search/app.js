const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const target = 4


let mid = Math.round(arr.length / 2);

while(true){    
    if(arr[mid] === target){
        console.log("result found index "+mid + " and result "+arr[mid]);
        break;
    } else if(target > arr[mid]){
        mid = mid + 1
    } else if(target < arr[mid]){
        mid = mid - 1
    } else{
        console.log("not match");
        break;

    }
}