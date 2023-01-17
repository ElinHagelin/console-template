import { question } from 'readline-sync'


//  ¤ Övning 3.1

// let name = question('What is your name? ')

// let city = question('Where do you live? ')

// console.log(`Welcome ${name} from ${city}!`)


//  ¤ Övning 3.2

// let x = Number(question('Please enter a number: '))
// let y = Number(question('Another one: '))
// console.log(`The sum is: ${x + y}`)


//  ¤ Övning 3.3

// let password = question('Please enter the password: ')

// if (password == 'mangojuice') {
// 	console.log(`Welcome!`);
// } else {
// 	console.log(`Sorry, that's the wrong password, try again!`)
// }


//  ¤ Övning 3.4

// let x = Number(question('Please enter a number: '))

// if (x < 100) {
// 	console.log(`Your number is less than 100!`);
// } else if (x > 100) {
// 	console.log(`Your number is higher than 100!`);
// } else {
// 	console.log(`Your number is 100!`);
// }


//  ¤ Övning 3.5a-c

// function guessingGame() {
// 	let secret = Math.floor(Math.random() * 100) + 1

// 	for (let guessCounter = 1; guessCounter < 10; guessCounter++) {
// 		let guess = Number(question('Guess a number: '))

// 		if (guess < secret) {
// 			console.log(`Your guess is to low`);
// 		} else if (guess > secret) {
// 			console.log(`Your guess is to high`);
// 		} else if (guess === secret) {
// 			console.log(`Yay, ${guess} is right! you guessed it in ${guessCounter} tries!`);
// 			return
// 		}
// 	}
// }

// guessingGame()


//  ¤ Övning 3.6a-c

// function calculator() {
// 	let x = Number(question('Please enter a number: '))
// 	let method = question('+, -, / or *?: ')
// 	let y = Number(question('Another number: '))
// 	let sum = 0

// 	if (method == '+') {
// 		sum = x + y
// 		console.log(`The sum of ${x} + ${y} is: ${sum}`)
// 	}
// 	else if (method == '-') {
// 		sum = x - y
// 		console.log(`The sum of ${x} - ${y} is: ${sum}`)
// 	}
// 	else if (method == '*') {
// 		sum = x * y
// 		console.log(`The sum of ${x} * ${y} is: ${sum}`)
// 	}
// 	else if (method == '/') {
// 		sum = x / y
// 		console.log(`The sum of ${x} / ${y} is: ${sum}`)
// 	}

// 	let previousSum = sum
// }

// calculator()


//  ¤ Övning 5.1a

// function numberLoop() {
// 	let chosen = Number(question('What number should the loop stopp on?: '))

// 	for (let num = 1; num <= 16; num++) {
// 		console.log(num);

// 		if (chosen === num) {
// 			return
// 		}
// 	}
// }

// numberLoop()


//  ¤ Övning 5.1b

// function varLoop() {

// 	for (let z = Number(question('Please enter a number: ')); z > 2; z /= 2) {
// 		console.log(`The variabel is ${z}`);

// 	}
// }

// varLoop()


//  ¤ Övning 5.2

// function fizzbuzz() {
// 	const dividesBy3 = i % 3 == 0
// 	const dividesBy5 = i % 5 == 0

// 	for (let i = 1; i <= 20; i++) {
// 		if (dividesBy3 && dividesBy5) {
// 			console.log("FizzBuzz");
// 		}
// 		else if (dividesBy3) {
// 			console.log("Fizz")
// 		}
// 		else if (dividesBy5) {
// 			console.log("Buzz")
// 		}
// 		else {
// 			console.log(i)
// 		}
// 	}
// }

// fizzbuzz()


//  ¤ Övning 5.3

// function sentence() {
// 	let word = ''
// 	let sentence = ''

// 	for (let i = 0; i < 20; i++) {

// 		word = question('Please enter a word or end the sentence with a dot or just press enter: ')
// 		sentence = `${sentence} ${word}`

// 		if (word == '' || word == '.') {
// 			console.log(`Your sentence is ${sentence}\n`);
// 			return
// 		}
// 		else {
// 			console.log(`Your words are ${sentence}\n`)
// 		}
// 	}
// }
// sentence()


//  ¤ Övning 5.4

// for (let i = 20; i >= 2; i = i - 2) {
// 	console.log(i);
// }

// for (let i = 20; i >= 2; i--) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }


//  ¤ Övning 5.5


// for (let i = 0; i < 20; i++) {

// 	let chosen = Number(question('Please enter a number: '))

// 	if (chosen % 2 === 0) {
// 		chosen = chosen / 2
// 		console.log('the number is even');
// 	}
// 	else {
// 		chosen = chosen * 3 + 1
// 		console.log('the number is odd');
// 	}

// 	console.log(chosen);

// 	if (chosen === 2) {
// 		break;
// 	}
// }



//  ¤ Övning 5.6a

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if ((i + j) % 2 === 0)
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6b

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if (j === 0)
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6c

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {

// 		if (j == i)
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6d

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if (j > 1 && j < 5)
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6e

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if (j === 2 || i === 2)
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6f

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if ((i + j) === 5 || j === 4)
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6g

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if (i === j || (i + j) === 5)
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6h

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if (j % 2 === 0)
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6i ___________________________________________________????

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if (((i === 1 || i === 4) && j > 0 && j < 7) || ((i === 2 || i === 3) && j === 1 && j === 6))
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6j _______________________________________????

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if ((i - 5 === j) || (i - 2 === j) || (i + 1 === j) || (i + 4 === j) || (i + 7 === j))
// 			text += '#'
// 		else if ((i - 4 === j) || (i - 1 === j) || (i + 2 === j) || (i + 5 === j))
// 			text += 'O'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



//  ¤ Övning 5.6k

// let text = ''
// for (let i = 0; i < 6; i++) {
// 	for (let j = 0; j < 8; j++) {
// 		if ((i < 3 && (j + 1) % 3 === 0) || i > 3 && (i + j + 1) % 2 === 0)
// 			text += '#'
// 		else
// 			text += '.'
// 	}
// 	text += '\n';
// }
// console.log(text);



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