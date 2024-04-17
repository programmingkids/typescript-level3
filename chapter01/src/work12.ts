export {};

// address、address.zipは必須ではない
type User = {
  name: string;
  address?: {
    city: string;
    nation?: string;
  };
};

const user: User = {
  name: 'Elsa',
  address: {
    city: 'Tokyo',
  },
};

// この場合、エラーになる
// console.log(user.address.city); // エラー
// console.log(user.address.nation); // エラー

// エラーに対応するには、undefinedの可能性を除外しないといけない
// 以下のように論理演算子でチェックするとエラーにならない
const city = user && user.address && user.address.city;
console.log(city); // Tokyo

// エラーに対応するには、undefinedの可能性を除外しないといけない
// 以下のように論理演算子でチェックするとエラーにならない
const nation = user && user.address && user.address.nation;
console.log(nation); // undefined

// オプショナルチェーンを利用すると簡単に記述できる
// オプショナルチェーンでは、null、undefinedなら、undefinedが返る
console.log(user.address?.city); // Tokyo
console.log(user.address?.nation); // undefined
