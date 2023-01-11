import { question } from 'readline-sync'

// let name = question('What is your name? ')

// let city = question('Where do you live? ')


// console.log(`Welcome ${name} from ${city}!`)

// let x = Number(question('Please enter a number: '))
// let y = Number(question('Another one: '))
// console.log(`The sum is: ${x + y}`)

// let password = question('Please enter the password: ')

// if (password == 'mangojuice') {
// 	console.log(`Welcome!`);
// } else {
// 	console.log(`Sorry, that's the wrong password, try again!`)
// }

// let x = Number(question('Please enter a number: '))

// if (x < 100) {
// 	console.log(`Your number is less than 100!`);
// } else if (x > 100) {
// 	console.log(`Your number is higher than 100!`);
// } else {
// 	console.log(`Your number is 100!`);
// }

let secret = Math.floor(Math.random() * 100) + 1
let guess = Number(question('Guess a number: '))

if (guess !== secret) {
	for (let guessCounter = 1; guess == secret; guessCounter++) {

		if (guess < secret) {
			console.log(`Your guess is to low`);
		} else if (guess > secret) {
			console.log(`Your guess is to high`);
		}
		console.log(`guesses: ${guessCounter}`);
	}
} else {
	console.log(`Hurray, your guess was right!`);
}