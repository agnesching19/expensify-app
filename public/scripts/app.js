'use strict';

var nameVar = 'Agnes';
var nameVar = 'Simon';
console.log('nameVar', nameVar);

var nameLet = 'Bob';
nameLet = 'Kevin';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
  var petName = 'Doggie';
  return petName;
}

var petName = getPetName();
console.log(petName);

// Block scoping

var fullName = 'Agnes Ching';
var firstName;

if (fullName) {
  var fistName = fullName.split(' ')[0];
  console.log(fistName);
}

console.log(fistName);
