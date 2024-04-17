export {};

// nameとageは必須
const person1: {
  name: string;
  age: number;
} = {
  name: 'Anna',
  age: 17,
};

console.log(person1); // { name: 'Anna', age: 17 }

console.log('=====');

// nameは必須、ageは必須ではない
const person2: {
  name: string;
  age?: number;
} = {
  name: 'Elsa',
};

console.log(person2); // { name: 'Elsa' }
