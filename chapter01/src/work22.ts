export {};

const user = {
  name: 'Elsa',
  age: 17,
  hobby: 'Magic',
};

// 変数から型を定義する
type User = typeof user;

/*
type User = {
  name: string,
  age: number,
  hobby: string,
}
*/

// 変数から定義した型に基づく変数定義
const newUser: User = {
  name: 'Anna',
  age: 15,
  hobby: 'Ski',
};
console.log(newUser);
