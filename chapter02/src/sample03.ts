export {};

// 戻り値は部分型を渡す
// 戻り値は共変

// 関数がある関数のサブタイプであるためには、
// 戻り値の型は部分型である
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

// Bird to Bird
function birdToBird(b: Bird): Bird {
  return new Bird();
}

// OK
clone(birdToBird);

// Bird to Craw
function birdToCraw(b: Bird): Crow {
  return new Crow();
}

// OK
clone(birdToCraw);

// Bird to Animal
function birdToAnimal(b: Bird): Animal {
  return new Animal();
}

// NG　戻り値の型は共変なので、Animalは部分型ではないのでエラー
// clone(birdToAnimal);
