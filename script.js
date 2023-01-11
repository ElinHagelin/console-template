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

function calculator() {
	let x = Number(question('Please enter a number: '))
	let method = question('+, -, / or *?: ')
	let y = Number(question('Another number: '))

	if (method == '+') {
		console.log(`The sum of ${x} + ${y} is: ${x + y}`)
	}
	else if (method == '-') {
		console.log(`The sum of ${x} - ${y} is: ${x - y}`)
	}
	else if (method == '*') {
		console.log(`The sum of ${x} * ${y} is: ${x * y}`)
	}
	else if (method == '/') {
		console.log(`The sum of ${x} / ${y} is: ${x / y}`)
	}
}

calculator()