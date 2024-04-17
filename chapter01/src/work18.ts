export {};

// 再代入可能
const person1 = {
  name: 'Elsa',
  age: 17,
  hobby: 'Magic',
};

person1.name = 'Donald'; // 代入OK

// 読み込み専用、再代入不可
const person2 = {
  name: 'Ann',
  age: 15,
  hobby: 'Ski',
} as const;

// person2.name = 'Donald'; // 代入エラー

// 読み込み専用
type Person = {
  readonly name: string;
  readonly age: number;
  readonly hobby: string;
};

// 再代入不可
const person3: Person = {
  name: 'Bob',
  age: 15,
  hobby: 'Movie',
};

// person3.name = 'Tom'; // 代入エラー
