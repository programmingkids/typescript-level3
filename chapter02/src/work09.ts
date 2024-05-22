export {};

// // 異なるプリミティブ型への代入はエラー
// const value1: string = 'Hello'; // (1) OK
// const value2: number = value1; // (2) Error

// // stringリテラル型をstring型へ代入はOK
// const value3: 'Hello' = 'Hello';
// const value4: string = value3; // (3) OK

// // numberリテラル型をnumber型へ代入はOK
// const value5: 1230 = 1230;
// const value6: number = value5; // (4) OK

// // string型をstringリテラル型へ代入はNG
// const value7: string = 'Hello';
// const value8: `Hello` = value7; // (5) NG

// // number型をnumberリテラル型へ代入はNG
// const value9: number = 1230;
// const value10: 1230 = value9; // (6) NG
