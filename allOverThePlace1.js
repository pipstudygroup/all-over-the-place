let var1 = {
    name: 'Jay',
    favFood: 'Cowboy Chicken',
    wheels: {
        car: "Honda"
    },
    kids: [
        'sally',
        'billy',
        'jelly'
    ],
    makeFood: (dinner) => {
        return dinner;
    }
}
// let var2 = var1;
// let var2 = Object.create(var1);
// let var2 = Object.assign({}, var1);
let var2 = JSON.parse(JSON.stringify(var1));
// let var2 = { ...var1 };
var2.name = 'Kalee';
var2.wheels.car = 'Genesis';
var2.kids.push('dfa');
console.log(var1);
console.log(var2);
let aboutJay = {
    name: 'Jay',
    favFood: 'Cowboy Chicken',
    friend: 'Rajal'
}
// console.log(var1?.aboutCar?.year);
let {
    name,
    aboutCar: {
        make = 'Renault',
        model = 'Cleo',
        year = 1995
    } = {},
    ...otherStuff
} = aboutJay;
console.log('other stuff', otherStuff);
console.log(`I'm ${name}, and I drive a ${year} ${make} ${model}.
    and here's some more information about me ${JSON.stringify(otherStuff)}`);
