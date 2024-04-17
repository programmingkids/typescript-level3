export {};

// null合体代入演算子
let message1 = 'Anna';
message1 ??= 'Elsa'; // message1がnullならElsaを代入
console.log(message1); // Anna

let message2 = null;
message2 ??= 'Elsa'; // message2がnullならElsaを代入
console.log(message2); // Elsa
