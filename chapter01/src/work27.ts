export {};

// User型エイリアス
type User = {
  name: string;
  age: number;
  code: string | number;
};

// 普通なら
const u1: User = {
  name: 'Elsa',
  age: 17,
  code: 'x-10-30',
};
console.log(u1);

// satisfy演算子なら
const u2 = {
  name: 'Anna',
  age: 15,
  code: 'x-20-15',
} satisfies User;

console.log(u2);
