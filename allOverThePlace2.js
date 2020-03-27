// Rest

const adder = (firstVal, secondVal, ...rest) => {
  console.log('rest', rest);
  return firstVal + secondVal;
}

const arrayAdder = (myNumbers) => {
  // let total = 0;
  // for (const yeet of myNumbers) {
  //   total += yeet;
  // }
  // return total;
  const add = (a, b) => a + b;
  return myNumbers.reduce(add);
  // return myNumbers.reduce((acc, number) => {
  //   return acc + number;
  // }, 6)
}

const myNumbers = [2, 3, 4, 5, 6, 7, 8];
const spread = [...myNumbers];
myNumbers.push(9);

// console.log('spread', spread);
// console.log(adder(...myNumbers));

// console.log('Max:', Math.max(myNumbers));

// console.log('Array Adder', arrayAdder(myNumbers)); // === arrayAdder(2, 3, 4, 5, 6, 7, 8)


const thePeeps = [
  {
    name: 'Kalee',
    kids: ['Burgers']
  },
  {
    name: 'Jay',
    kids: ['Veggies', 'Tomatoes']
  },
  {
    name: 'Tambria',
    kids: ['Bacon']
  },
  {
    name: 'Haile',
    kids: []
  },
  {
    name: 'Rajal',
    kids: ['Chocolate']
  }
];

const associates = ['Kalee', 'Tambria', 'Haile', 'Rajal'];
// const associatesAndFamilies = ['Kalee', 'Burgers', 'Jay', 'Tomatoes', 'Tambria', 'Bacon', 'Haile', 'Rajal']; 
// coding problem ^ , convert the associates array to associatesAndFamilies by slapping the kids with the parents
//

// using find
const getKids = (name) => {
  return (thePeeps.find((peep) => {
    return peep.name === name;
  }) || {}).kids;
}

const getFlattenedArray = () => {
  const yeetFamily = [];
  thePeeps.forEach((peep) => {
    yeetFamily.push(peep.name);
    yeetFamily.push(...peep.kids);
  }) 
  return yeetFamily;
}

console.log('All Families', getFlattenedArray());

const tambriasKids = getKids('Tambria');

// console.log('Tam Kids', tambriasKids);


const myNumbersAgain = [2, 3, 4, 5, 6, 7, 8];
const myNumbersToAdd = [23, 56, 567];

// const myNewNumbers = myNumbersAgain.splice('position', '# items to remove', 'items to add');
const myDeletedNumbers = myNumbersAgain.splice(3, 0, ...myNumbersToAdd); // === myNumbersAgain.splice(3, 0, 23, 56, 567);
// console.log('myNewNumbers', myNumbersAgain);
// console.log('deleted', myDeletedNumbers);


//slice
const myNumbersAgainForSlice = [2, 3, 4, 5, 6, 7, 8];

const mySlicedNumbers = myNumbersAgainForSlice.slice(0);
// console.log('mysliced', mySlicedNumbers);
