export {};

// インデックスシグネチャー
// キーがstringで、値がnumber
let product: {
  [K: string]: number;
};

product = {
  id: 12345,
  price: 1200,
  categoryId: 5400,
};

console.log(product); // { id: 12345, price: 1200, categoryId: 5400 }
