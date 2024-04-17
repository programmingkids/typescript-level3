export {};

const value1: boolean = true;
console.log(typeof value1); // boolean

const value2: number = 1200;
console.log(typeof value2); // number

const value3: string = 'Hello';
console.log(typeof value3); // string

const value4: undefined = undefined;
console.log(typeof value4); // undefined

const value5: null = null;
console.log(typeof value5); // object

const value6: Symbol = Symbol('Hello');
console.log(typeof value6); // symbol

const value7: bigint = 1200n;
console.log(typeof value7); // bigint

const value8: number[] = [10, 20, 30];
console.log(typeof value8); // object

const value9: { name: string } = { name: 'Bob' };
console.log(typeof value9); // object

const value10: (v1: number, v2: string) => string = (v1: number, v2: string): string => {
  return 'Hello';
};
console.log(typeof value10); // function
