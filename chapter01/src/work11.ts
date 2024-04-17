export {};

type User = {
  name: string;
};

// user1はundefinedが代入されている
// let user1: undefined | null | User;
// console.log(user1.name); // エラーになる

// user2はundefinedが代入されている
let user2: undefined | null | User;
console.log(user2?.name); // エラーにならない => undefined
