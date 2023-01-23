//  ¤ Övning 1a-b

let city = {
	name: "Karlstad",
	population: 95408,
	latitude: "59° 22' 45.48 N",
	longitude: "13° 30' 12.85 E",
	country: "Sweden"

}
function move(x) {
	x.population = x.population - 1
	console.log(x.population);
}

// move(city)




//  ¤ Övning 2

function copy(objectToCopy) {
	let objectCopy = { ...objectToCopy };
	console.log(objectCopy);
	return objectCopy
}

// copy(city)




//  ¤ Övning 3


for (const property in city) {
	console.log(`${property}: ${city[property]}`);
}




//  ¤ Övning 4a-b

let school = {
	teachers: 20,
	students: 256,
	adress: "skolgatan 1",
	teachersSubject: {
		'Björn': 'Musik',
		'Benny': ['NO', 'Teknik'],
		'Birgitta': ['Artificiell intelligens', 'Svenska']
	}
}

//  ¤ Övning 4c

let year = {
	days31: ['january', 'march', 'may', 'july', 'august', 'october', 'december'],
	days30: ['april', 'june', 'september', 'november'],
	days28: 'febuary'
}

//  ¤ Övning 4d

let HassesTamburinfabrik = {
	employees: ['Hasse', 'Hedwig', 'Hermione'],

	products: {
		T1: { price: 200 },
		T2: { price: 250 },
		T3: { price: 320 }
	},

	orders: {
		Horatio: {
			firstOrder: { product: this.products.T1, price: this.products.T1.price, amount: 1 },
			secondOrder: { product: this.products.T2, price: this.products.T2.price, amount: 2 }
		}
	}
}