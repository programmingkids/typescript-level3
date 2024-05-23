export {};

// 関数の定義
function add(x1: number, x2: number): number {
  return x1 + x2;
}

// 関数宣言から関数型の取り出し
type F = typeof add; // type F = (x1:number, x2:number) => number;

// ひき算の関数
const minus: F = (v1: number, v2: number): number => v1 - v2;

// 関数「minus」の呼び出し
const r: number = minus(7, 4);
console.log(r); // 3
