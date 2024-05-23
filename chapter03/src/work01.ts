export {};

type StringOrNumber = string | number;

function show(value: StringOrNumber): void {
  if (typeof value === 'string') {
    console.log(value);
  } else {
    console.log(value.toFixed(2));
  }
}
show('Hello'); // Hello
show(3.14159); // 3.14
