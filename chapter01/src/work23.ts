export {};

type User = {
  name: string;
};

// オブジェクトの型のキーから型を作成
type UserKeyType = keyof User;

// これと同じ
// type UserKeyType = 'name';

const userName: UserKeyType = 'name';
console.log(userName); // name;

console.log('=====');

type Person = {
  name: string;
  age: number;
  hobby: string;
};

// オブジェクトの型のキーから型を作成
// この場合、キーでユニオン型を作成する
type PersonKeyType = keyof Person;

// これと同じ
// type PersonKeyType = 'name' | 'age' | 'hobby';

const personKeyValue: PersonKeyType = 'age';
console.log(personKeyValue); // age
