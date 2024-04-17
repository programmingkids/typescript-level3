export {};

// unknown型の定義
let value: unknown;

// 数値の代入可
value = 1200; // OK

// 文字列の代入可
value = 'Hello'; // OK

// オブジェクトの代入可
value = {
  name: 'Bob',
  age: 15,
}; // OK
