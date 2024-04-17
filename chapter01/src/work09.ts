export {};

// nullの判定を三項演算子で行う場合
const value1 = null;
const message1 = value1 == null ? 'おはよう' : value1;
console.log(message1); // おはよう

// null合体演算子　nullの場合
const value2 = null;
const message2 = value2 ?? 'おはよう';
console.log(message2); // おはよう

// null合体演算子　undefinedの場合
const value3 = undefined;
const message3 = value3 ?? 'おはよう';
console.log(message3); // おはよう

// null合体演算子　null、undefinedでない場合
const value4 = 'おやすみ';
const message4 = value4 ?? 'おはよう';
console.log(message4); // おやすみ
