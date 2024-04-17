export {};

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// 数値を文字列に変換する関数型
type ToString = (num: number) => string;

// 数値を文字列に変換する関数の返り値
type ReturnTypeToString = ReturnType<ToString>;
// これは以下と同じ
// type ReturnTypeToString = string;

// ToSringの関数定義
const func: ToString = (val: number): string => {
  return 'a'.repeat(val);
};

// 関数の呼び出し
const r: ReturnTypeToString = func(5);
console.log(r); // aaaaa
