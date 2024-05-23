export {};

type StringOrNUmber = string | number;

function show(value: StringOrNUmber): void {
  if (typeof value === 'string') {
    const result = value.toUpperCase();
    console.log(result);
  } else {
    const result = value.toFixed(0);
    console.log(result);
  }
}

show('Hello'); // HELLO
show(1234.567); // 1235

function show2(value: StringOrNUmber): void {
  switch (typeof value) {
    case 'string':
      const r1 = value.toUpperCase();
      console.log(r1);
      break;
    case 'number':
      const r2 = value.toFixed(0);
      console.log(r2);
      break;
    default:
      break;
  }
}

console.log(typeof true); // boolean
console.log(typeof 1230); // number
console.log(typeof 'Hello'); // string
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof Symbol('')); // symbol
console.log(typeof 1234n); // bigint
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof function () {}); // function
