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

console.log(findIndex(arr, target))