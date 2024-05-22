export {};

class A {
  a: string = '';
}
class B extends A {
  b: string = '';
}
class C extends B {
  c: string = '';
}

// 引数の型はB、戻り値の型はB
// 引数の型は反変、戻りの型は共変
type F = (b: B) => B;

// 引数はF型の関数が要求される
function getB(f: F): void {
  const b = new B();
  f(b);
}

// 引数の型はAなので基本型
const aToB = (a: A): B => {
  return new B();
};

// 引数の型はBなので同じ型
const bToB = (b: B): B => {
  return new B();
};

// 引数の型はCなので部分型
const cToB = (c: C): B => {
  return new B();
};

// getB(aToB); // OK　引数は反変なので基本型はOK
// getB(bToB); // OK　同じ型
// getB(cToB); // NG　引数は反変なので部分型はNG
