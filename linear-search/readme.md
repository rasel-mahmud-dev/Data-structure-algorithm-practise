# Linear Search Algorithm

### What is Linear Search Algorithm?

Linear search is a sequential searching algorithm where we start from one end and check every element of the list 
until the desired element is found. 
It is the simplest searching algorithm.

In javascript indexOf, findIndex, find, forEach, map... use behind the seen this algorithm. 

![sad](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1a40e0d8-66b8-49e8-8d3c-c9c0130f1f7d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221111T135259Z&X-Amz-Expires=86400&X-Amz-Signature=274d457c0137b7f48b17e31832525459a6395fca2ea40237c6024e8cc6282e3a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Untitled.png%22&x-id=GetObject)


```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,
	10, 11, 12, 13, 14, 15, 16, 17, 18,
	19, 20, 21, 22, 23, 24, 25, 26, 27,
	28, 29, 30, 31, 32]

const target = 31



function findIndex(arr, target) {
	let index = -1;
	for (let i = 0; i < arr.length; i++) {
		if (target === arr[i]) {
			index = i;
			break;
		}
	}
	return index
}

console.log(findIndex(arr, target)) // 30
```