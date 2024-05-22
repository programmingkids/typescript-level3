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

// 戻り値の型はAなので基本型
const bToA = (b: B): A => {
  return new A();
};

// 戻り値の型はBなので同じ型
const bToB = (b: B): B => {
  return new B();
};

// 戻り値の型はCなので部分型
const bToC = (b: B): C => {
  return new C();
};

// getB(bToA); // エラー　共変ではない
// getB(bToB); // OK　戻り値の型は共変
// getB(bToC); // OK　戻り値の型は共変
