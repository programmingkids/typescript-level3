export {};

class Animal {
  public name: string = '';
  walk(): void {}
}

class Dog extends Animal {
  cry(): void {}
}

// const a1: Animal = new Animal(); // (1) 当然OK
// const a2: Animal = new Dog(); // (2) 部分型なのでOK

// const d1: Dog = new Animal(); // (4) エラー
