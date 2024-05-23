export {};

// 関数型の宣言
type F = (x1: number, x2: number) => number;

// たし算の関数
const add: F = (x1: number, x2: number): number => x1 + x2;

// かけ算の関数
const multiply: F = (x1, x2) => x1 * x2;

// 関数「add」の呼び出し
const r1: number = add(4, 5);
console.log(r1); // 9

// 関数「multiply」の呼び出し
const r2: number = multiply(4, 5);
console.log(r2); // 20
