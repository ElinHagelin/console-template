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

// 	return sum / (arr.length)
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
// }

// console.log(randomList, biggestNumber(randomList));



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




//  ¤ Övning 9

const worldData = [
	{ "name": "United Kingdom", "continent": "Europe", "population": 65270121, "pFemale": 0.508 },
	{ "name": "Republic of Ireland", "continent": "Europe", "population": 4708209, "pFemale": 0.499 },
	{ "name": "Australia", "continent": "Oceania", "population": 24482205, "pFemale": 0.502 },
	{ "name": "Taiwan", "continent": "Asia", "population": 23522296, "pFemale": 0.501 },
	{ "name": "Uruguay", "continent": "South America", "population": 3446772, "pFemale": 0.517 },
	{ "name": "Morocco", "continent": "Africa", "population": 35010005, "pFemale": 0.510 },
	{ "name": "Nigeria", "continent": "Africa", "population": 188688090, "pFemale": 0.494 },
	{ "name": "Zimbabwe", "continent": "Africa", "population": 16051510, "pFemale": 0.507 },
	{ "name": "China", "continent": "Asia", "population": 1381321335, "pFemale": 0.488 },
	{ "name": "Mexico", "continent": "North America", "population": 129386794, "pFemale": 0.507 },
	{ "name": "Canada", "continent": "North America", "population": 36446796, "pFemale": 0.504 },
	{ "name": "Czech Republic", "continent": "Europe", "population": 10556351, "pFemale": 0.509 },
	{ "name": "Iceland", "continent": "Europe", "population": 332631, "pFemale": 0.496 }
];


//  ¤ Övning 9a


// worldData.forEach(element => console.log(element['name']));

const worldDataCountries = worldData.map(element => element['name']);

// console.log(worldDataCountries);



//  ¤ Övning 9b


const firstAfricanCountry = worldData.find(country => country['continent'] == 'Africa')

// console.log(firstAfricanCountry);




//  ¤ Övning 9c

// const OceanianCountries = worldData.filter(country => country['continent'] == 'Oceania')

// let amountWomen = OceanianCountries.forEach(WPopulation => console.log('Antalet kvinnor i Australien är: ' + (WPopulation['pFemale']) * (WPopulation['population'])))



//  ¤ Övning 9d

let modifiedWorldData = worldData.map((country) => {
	return { name: country.name, females: country.population * country.pFemale, men: country.population - country.population - country.pFemale }
})

// console.log(modifiedWorldData);



//  ¤ Övning 9e

const europeanCountries = worldData.filter(country => country['continent'] == 'Europe')
// console.log(europeanCountries);

let sum = 0
europeanCountries.map(country => {
	sum = sum + country.population
})

// console.log(sum);





//  ¤ Övning 9f

const firstCountryOver100m = worldData.find(country => country.population > 100000000)

// console.log(firstCountryOver100m);




//  ¤ Övning 9g

const lessThan49ProcentWomen = worldData.filter(country => country.pFemale < 0.49)

// console.log(lessThan49ProcentWomen);




//  ¤ Övning 9h

const iceland = worldData.find(country => country.name == 'Iceland')

console.log(iceland.population);