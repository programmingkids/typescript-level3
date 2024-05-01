export {};

console.log('======');

type HasName = {
  name: string;
};

type HasNameAge = {
  name: string;
  age: number;
};

// OK 戻り値の型注釈が基本型
// 型通りの戻り値
// function getHuman(): HasName {
//   const o = {
//     name: 'bob',
//   };
//   return o;
// }
// const r: HasName = getHuman();
// console.log(r); // { name: 'bob' }

// OK 戻り値の型注釈が基本型
// 戻り値は部分型ならばOK
// function getHuman(): HasName {
//   const o = {
//     name: 'bob',
//     age: 15,
//   };
//   return o;
// }

// const r: HasName = getHuman();
// console.log(r); // { name: 'bob', age: 15 }

// OK
// OK 戻り値の型注釈が部分型
// 型通りなのでOK
// function getHuman(): HasNameAge {
//   const o = {
//     name: 'bob',
//     age: 15,
//   };
//   return o;
// }
// const r: HasNameAge = getHuman();
// console.log(r); // { name: 'bob', age: 15 }

// NG 戻り値の型注釈が部分型
// 基本型は型を満たしていないのでNG
// function getHuman(): HasNameAge {
//   const o = {
//     name: 'bob',
//   };
//   return o;  // ここでエラー
// }
// const r: HasNameAge = getHuman();
// console.log(r);

// OK 引数の型が基本型
// 実引数が型通りなのでOK
// function getHuman(h: HasName): void {
//   console.log(h.name);
// }
// const h:HasName = { name: 'bob' }
// getHuman(h);

// OK 引数の型が基本型
// 実引数が部分型なのでOK
// function getHuman(h: HasName): void {
//   console.log(h.name);
// }
// const h: HasNameAge = { name: 'bob', age: 17 };
// getHuman(h);

// OK 引数の型が部分型
// 実引数が部分型なのでOK
// function getHuman(h: HasNameAge): void {
//   console.log(h.name);
// }
// const h: HasNameAge = { name: 'bob', age: 17 };
// getHuman(h);

// NG 引数の型が部分型
// 実引数が基本型で型を満たしていないのでNG
// function getHuman(h: HasNameAge): void {
//   console.log(h.name);
// }
// const h: HasName = { name: 'bob' };
// getHuman(h); // ここでエラー

// OK 基本型の引数
// 型が同じなので、問題ない
// const getHuman: (h: HasName) => void = (h: HasName): void => {
//   console.log(h.name);
// };
// const h: HasName = { name: 'Bob' };
// getHuman(h);

// NG
// 反変の関係、基本型の指定に部分型の指定はNG
// const getHuman: (h: HasName) => void = (h: HasNameAge): void => {
//   console.log(h.name);
// };
// const h: HasName = { name: 'Bob' };
// getHuman(h);

// OK
// 反変の関係、部分型の指定に基本型の指定はOK
// const getHuman: (h: HasNameAge) => void = (h: HasName): void => {
//   console.log(h.name);
// };
// const h: HasNameAge = { name: 'Bob', age: 17 };
// getHuman(h);

// OK
// 型が同じなのでOK、問題ない
// const getHuman: (h: HasNameAge) => void = (h: HasNameAge): void => {
//   console.log(h.name);
// };
// const h: HasNameAge = { name: 'Bob', age: 17 };
// getHuman(h);
