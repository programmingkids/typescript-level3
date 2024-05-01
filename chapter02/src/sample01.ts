export {};
class Animal {}

class Bird extends Animal {
  cry() {}
}

class Crow extends Bird {
  caw() {}
}

// OK
const a1: Animal = new Animal();
console.log(a1);

// OK
const a2: Animal = new Bird();
console.log(a2);

// OK
const a3: Animal = new Crow();
console.log(a3);

// NG 部分型ではない
// const b1: Bird = new Animal();
// console.log(b1);

// OK
const b2: Bird = new Bird();
console.log(b2);

// OK
const b3: Bird = new Crow();
console.log(b3);

// NG 部分型ではない
// const c1: Crow = new Animal();
// console.log(c1);

// NG 部分型ではない
// const c2: Crow = new Bird();
// console.log(c2);

// OK
const c3: Crow = new Crow();
console.log(c3);
