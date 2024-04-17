export {};

// strictNullChecksがfalseの場合
// let name1: string = 'Bob';
// name1 = undefined; // エラーにならない
// name1 = null; // エラーにならない

// strictNullChecksがtrueの場合
// null非許容型となる、つまりnullとundefinedを許容しない
// let name2: string = 'Bob';
// name2 = undefined; // エラーになる
// name2 = null; // エラーになる

// strictNullChecksがtrueの場合
// ユニオン型でundefiend、nullを許容する必要がある
// null許容型、null、undefinedを許容する
// let name3: undefined | null | string = 'Bob';
// name3 = undefined; // エラーにならない
// name3 = null; // エラーにならない
