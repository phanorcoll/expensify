//
//Object Destructuring
//
const person = {
    name: 'Phanor',
    age: 36,
    location: {
        city: 'Merida',
        temp: 30
    }
}

console.log(age);
//ES6 destructuring
//if name is missing, use default value
const { name: FirstName = 'Anonymous', age } = person;

const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

//console.log(`${name} is ${age}`);

//
//Array Destructuring
//

const address = [
    '1299 S Juniper Street',
    'Philadelphia',
    'Pennsilvania',
    '19147'
];

const [direccion, , ,codigopostal] = address;

console.log(`you are in ${city1} ${state}.`);