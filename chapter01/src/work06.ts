export {};

// オブジェクトの宣言
const person = { name: 'Bob', age: 17 };
// オブジェクトをプロパティ名で分割代入
const { name, age } = person;

console.log(name); // Bob
console.log(age); // 17

console.log('=====');

// 別名で取り出し
const user = { name: 'Bob', age: 17 };
// nameをusernameという別名で分割代入
const { name: username } = person;

console.log(username); // Bob

console.log('=====');

const product = {
  name: {
    title: '鉛筆',
    code: 123,
  },
  category: {
    title: '文房具',
    id: 4500,
  },
};

// ネストされているオブジェクトを別名で分割代入
const {
  name: { title, code },
  category: { title: categoryTitle, id },
} = product;

console.log(title); // 鉛筆
console.log(code); // 123
console.log(categoryTitle); // 文房具
console.log(id); // 4500
