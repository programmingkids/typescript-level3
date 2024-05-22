export {};

// 基本型
class Animal {
  name: string = '';
  walk(): void {}
}

// 部分型
class Dog {
  name: string = '';
  walk(): void {}
  cry(): void {}
}

// const animal: Animal = new Dog(); // 部分型なので代入OK、これは共変
// const dog: Dog = new Animal(); // エラー、共変できない
