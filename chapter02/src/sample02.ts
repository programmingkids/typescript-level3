export {};

// 実引数は部分型を渡す
// 実引数は共変
class Animal {}

class Bird extends Animal {
  cry() {}
}

class Crow extends Bird {
  caw() {}
}

function cry(bird: Bird): Bird {
  bird.cry();
  return bird;
}

// NG 部分型ではない
// cry(new Animal());

// OK
cry(new Bird());

// OK
cry(new Crow());
