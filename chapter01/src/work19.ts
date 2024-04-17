export {};

// never型にはどのような値も代入できない
// const value1: never = 'Hello';

// never型にはany型でも代入できない
// const any2: any = 'Hello';
// const value2: never = any2;

console.log('======');

// 戻り値がない、voidですらない
function throwError(): never {
  throw new Error();
}

// 無限ループで戻り値がない
function forever(): never {
  while (true) {} // 無限ループ
}
