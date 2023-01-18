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