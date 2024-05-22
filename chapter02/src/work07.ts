export {};

class Animal {
  public name: string = '';
  public walk(): void {}
}

class Dog {
  public name: string = '';
  public walk(): void {}
}

const a: Animal = new Animal(); // (1) OK
const d: Dog = a; // (2) OK
