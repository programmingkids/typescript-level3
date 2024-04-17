export {};

const value1: string = 'Hello';
const value2: number = 1200;
const value3: boolean = true;
const value4: undefined = undefined;
const value5: null = null;
const value6: symbol = Symbol('Hello');
const value7: bigint = 1200n;

console.log(value1); // Hello
console.log(value2); // 1200
console.log(value3); // true
console.log(value4); // undefined
console.log(value5); // null
console.log(value6); // Symbol(Hello)
console.log(value7); // 1200n
