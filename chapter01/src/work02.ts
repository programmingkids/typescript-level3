export {};

// プリミティブ型のstring
const strValue = 'Hello';

// ラッパーオブジェクトに入れる
const strObj = new String(strValue);

// オブジェクトとしてふるまう
console.log(strObj.length); // 5
console.log(strObj.toUpperCase()); // HELLO
