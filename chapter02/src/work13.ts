export {};

class Animal {
  public name: string = '';
  walk(): void {}
}

class Dog {
  public name: string = '';
  walk(): void {}
  cry(): void {}
}

class Human {
  public name: string = '';
  walk(): void {}
}

// const a1: Animal = new Animal(); // (1) 当然OK
// const a2: Animal = new Dog(); // (2) 部分型なのでOK
// const a3: Animal = new Human(); // (3) 構造が同じなのでOK

// const d1: Dog = new Animal(); // (4) エラー
// const d2: Dog = new Human(); // (5) エラー

// const h1: Human = new Animal(); // (6) 構造が同じなのでOK
// const h2: Human = new Dog(); // (7) 部分型なのでOK
