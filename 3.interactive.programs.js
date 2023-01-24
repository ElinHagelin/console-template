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