//  ¤ Övning 1a

let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(numberList[4]);

//  ¤ Övning 1b

function switchNumbers() {
	numberList.splice(3, 1, 5)
	numberList.splice(5, 1, 3)
	return numberList
}

// console.log(switchNumbers())


//  ¤ Övning 2

// hypotes: listan kommer bli 2, 3, 4, 5, 6, 7
// svar: listan blev 2, NaN, NaN, NaN, NaN, NaN ____________??

// let list = [2]
// for (let i = 1; i <= 5; i++) {
// 	let index = list[list.length - 1]
// 	let x = list[index]
// 	list.push(x + i)
// }
// console.log(list)


//  ¤ Övning 3

// hypotes: listan kommer bli 1, 2, 3, 4, 40, 5, 50, 6, 7, 8, 9, 10
// svar: min hypotes stämde!

// let list = []
// for (let i = 1; i <= 10; i++) {
// 	list.push(i)
// 	if (i > 3 && i < 6) {
// 		list.push(10 * i)
// 	}
// }
// console.log(list)


//  ¤ Övning 4

// hypotes: list2 kommer bli [0, 1, 2, 3, 4, 5] list3 kommer bli [2, 4, 8, 16, 32, 64]
// svar: min hypotes stämde!

// let list1 = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
// let list2 = [], list3 = []
// for (let i = 0; i < list1.length; i++) {
// 	if (list1[i] < 100) {
// 		list2.push(i)
// 		list3.push(list1[i])
// 	}
// }
// console.log(list2, list3);



//  ¤ Övning 5

// hypotes: list2 kommer bli [20, 21, 22, 23, 24, 25, 26]
// svar: min hypotes stämde!

// let list1 = [10, 11, 12, 13, 14, 15, 16]
// let list2 = []
// for (let i = 0; i < list1.length; i++) {
// 	list2.push(list1[i] + 10)
// }
// console.log(list2);



//  ¤ Övning 6

// import { randomInt } from './6.functions.js'

// let randomList = []

// for (let i = 0; i < 10; i++) {
// 	randomList.push(randomInt(20, 30))
// }

// function biggestNumber(arr) {
// 	return Math.max(...arr)
// }

// function smallestNumber(arr) {
// 	return Math.min(...arr)
// }

// function averageNumber(arr) {
// 	let sum = 0
// 	for (let i = 0; i < arr.length; i++) {
// 		sum = sum + arr[i]
// 	}
// 	console.log(sum);
// 	let average = sum / (arr.length)
// 	return average
// }

// function secondBiggest(arr) {
// 	let first = -1, second = -1;

// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > first) {
// 			second = first;
// 			first = arr[i];
// 		}
// 		else if (arr[i] > second && arr[i] != first) {
// 			second = arr[i];
// 		}
// 	}
// 	return second;
// }________________________________________________________________________??

// console.log(randomList, secondBiggest(randomList));



//  ¤ Övning 7

// let upTo100 = []

// for (let i = 1; i <= 100; i++) {
// 	upTo100.push(i)
// }
// console.log(upTo100);

// function sumOfArray(arr) {

// 	let sum = 0
// 	for (let i = 0; i < arr.length; i++) {
// 		sum = sum + arr[i]
// 	}
// 	return sum;
// }
// console.log(sumOfArray(upTo100))



//  ¤ Övning 8a

// let nautic = ['körde', 'jag', 'båt', 'min', 'natt', 'kulen', 'en']
// let amphibic = ['se', 'att', 'lustiga', 'är', 'grodorna', 'små']


// function newListRightWay(arr) {
// 	let fixed = [...arr].reverse()
// 	return fixed
// }

// console.log(newListRightWay(nautic), nautic)



//  ¤ Övning 8b

// function sameListRightWay(arr) {
// 	let fixed = arr.reverse()
// 	return fixed
// }

// console.log(sameListRightWay(nautic), nautic)
