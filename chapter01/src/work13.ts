export {};

const value: [string, string, number] = ['Bob', 'Tom', 15];
console.log(value);

value[0] = 'John';
// value[0] = 15; // 型が違うのでエラー
// value[3] = 'Tom'; // タプルは固定長なのでエラー
