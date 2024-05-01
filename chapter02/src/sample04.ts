export {};

// 関数がある関数のサブタイプであるためには、
// 引数の型は基本型である必要がある
// 関数のサブタイプで引数は反変
class Animal {}

class Bird extends Animal {
  cry() {}
}

class Crow extends Bird {
  caw() {}
}

function clone(f: (b: Bird) => Bird): void {
  let b = new Bird();
  b = f(b); // 戻り値の型がBird、またはBirdの部分型の必要があるのでAnimalはダメ
  b.cry();
}

function animalToBird(a: Animal): Bird {
  return new Bird();
}

// OK
clone(animalToBird);

function birdToBird(b: Bird): Bird {
  b.cry();
  return new Bird();
}

// OK
clone(birdToBird);

function crowToBird(c: Crow): Bird {
  c.caw(); // Bird型が渡されるのに、Crow型のメソッドを呼び出すのでエラー
  return new Bird();
}

// NG　関数の引数は反変
// clone(crowToBird);
