import { question } from 'readline-sync'


//  ¤ Övning 6.1a

// svar: Test



//  ¤ Övning 6.1b

// var a = foo(3);
// console.log(a);
// function foo(i) {
// 	return i * i;
// }

// svar: 9



//  ¤ Övning 6.1c

// console.log(foo(3, 5));
// function foo(x, y) {
// 	return x * y;
// }

// svar: 15



//  ¤ Övning 6.1,5a

// let f = function (x) { return x * 2 + 1 }

// let g = function (x, y) { console.log(x + ',' + y) }



//  ¤ Övning 6.1,5a

// let f = x => x * 2 + 1

// let g = (x, y) => console.log(x * 2 + 1)



//  ¤ Övning 6.2a

// function personalInfo(name, city, favouriteColor) {
// 	console.log(`Welcome ${name} from ${city} with ${favouriteColor} as favourite color`);
// }

// personalInfo('Elin', 'Karlstad', 'Ljusgrön')



//  ¤ Övning 6.2b

// function personalInfo(name, city, favouriteColor) {
// 	console.log(`Welcome ${name} from ${city} with ${favouriteColor} as favourite color`);
// }

// personalInfo(question('What is your name? '), question('What city are you from? '), question('What is your favourite color? '))



//  ¤ Övning 6.3a

// function add(x, y) {
// 	let z = x + y
// 	return z
// }

// console.log(add(5, 6));



//  ¤ Övning 6.3b

// function multi(a, b, c) {
// 	let d = a * b * c
// 	return d
// }

// console.log(multi(3, 5))

// svar: NaN




//  ¤ Övning 6.3c

// function sum(e) {
// 	console.log(e);
// }

// sum(add(multi(3, 2, 1), 3))



//  ¤ Övning 6.4

// function stringConverter(x) {
// 	let isConvertable = Number(x)
// 	if (isNaN(isConvertable) == true) {
// 		return (x)
// 	}
// 	else {
// 		return (isConvertable)
// 	}
// }

// let xValue = stringConverter(question('Please enter a number: '))

// console.log(xValue);



//  ¤ Övning 6.5

// function sameDataType(x, y) {
// 	if (typeof x === typeof y) {
// 		console.log(`${x} and ${y} are the same datatypes`);
// 	}
// 	else {
// 		console.log(`${x} and ${y} are not the same datatypes`);
// 	}
// }

// sameDataType(2, false)



//  ¤ Övning 6.6

// function roundNumber(x) {
// 	let round = Math.round(x * 100) / 100
// 	console.log(round);
// }
// roundNumber(4, 9723487234)



//  ¤ Övning 6.7a

// function paragraph(p) {
// 	let paragraphTags = `<p>${p}</p>`
// 	return paragraphTags
// }

// let paragraphVar = paragraph("hej")
// console.log(paragraphVar);



//  ¤ Övning 6.7b

// function tag(tagName, tagContent) {
// 	let completeTag = `<${tagName}>${tagContent}</${tagName}>`
// 	console.log(completeTag);
// 	return completeTag
// }

// tag('h1', 'huvudrubrik')




//  ¤ Övning 6.8

// function daysInMonth(m) {
// 	let days31 = m === 'jan' || m === 'mar' || m === 'maj' || m === 'jul' || m === 'aug' || m === 'okt' || m === 'dec'
// 	let days30 = m === 'apr' || m === 'jun' || m === 'sep' || m === 'nov'
// 	if (days31) {
// 		return 31
// 	}
// 	else if (days30) {
// 		return 30
// 	}
// 	else {
// 		return 28
// 	}
// }

// let answerDays = daysInMonth('feb')
// console.log(answerDays);




//  ¤ Övning 6.9a

// const substringMaker = x => x.substring(0, 3)

// console.log(substringMaker('programmering'));




//  ¤ Övning 6.9b

// const datePattern = /^([0-9]{4}-[0-9]{2}-[0-9]{2})$/;

// function year(y) {
// 	if (datePattern.test(y) == true) {
// 		return Number(y.substring(0, 4))
// 	}
// 	else {
// 		return 'Enter the date in the format "YYYY-MM-DD", please'
// 	}
// }

// // let checkYear = year('1991-04-08')
// // console.log(checkYear);




//  ¤ Övning 6.9c

// const datePattern = /^([0-9]{4}-[0-9]{2}-[0-9]{2})$/;

// function month(m) {

// 	if (datePattern.test(m) == true) {
// 		return Number(m.substring(5, 7))
// 	}
// 	else {
// 		return 'Enter the date in the format "YYYY-MM-DD", please'
// 	}
// }

// function day(d) {

// 	if (datePattern.test(d) == true) {
// 		return Number(d.substring(8, 10))
// 	}
// 	else {
// 		return 'Enter the date in the format "YYYY-MM-DD", please'
// 	}
// }

// function daysBetween(x, z) {
// 	if (datePattern.test(x) == true && datePattern.test(z) == true) {
// 		let yearsBetween = (year(z) - year(x)) * 365
// 		let monthsBetween = ((month(z) - month(x))) * 30
// 		let daysBetween = yearsBetween + monthsBetween + (day(z) - day(x))
// 		return daysBetween
// 	}
// 	else {
// 		return 'Enter the date in the format "YYYY-MM-DD", please'
// 	}
// }

// let checkDaysBetween = daysBetween('2021-11-27', '2023-01-27')
// console.log(`antalet dagar mellan är ${checkDaysBetween}`);



//  ¤ Övning 6.10

// const fahrenheitConvert = f => Math.round(((f - 32) * 5 / 9) * 10) / 10

// console.log(fahrenheitConvert(98));




//  ¤ Övning 6.11

// function add(UpToNumber) {
// 	let sum = 0
// 	for (let x = 1; x <= UpToNumber; x++) {
// 		sum = sum + x
// 		console.log(sum);
// 	}
// }

// add(100)




//  ¤ Övning 6.12

// function backwards(sentence) {

// 	let sentenceLength = sentence.length
// 	let backwardSentence = ''

// 	while (sentenceLength >= 0) {
// 		backwardSentence = backwardSentence + sentence.charAt(sentenceLength)
// 		sentenceLength--
// 	}
// 	console.log(backwardSentence);
// }

// backwards('elinhagelin elinhagelin')




//  ¤ Övning 6.13

export function randomInt(min, max) {
	let r = Math.random()
	min = Math.ceil(min);
	max = Math.floor(max);
	r = r * (max - min + 1) + min
	return Math.floor(r)
}



console.log(randomInt(20, 30));

// console.log(Math.random() * 10);