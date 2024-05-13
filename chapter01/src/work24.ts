export {};

// ユニオン型の定義
type SubjectType = 'Japanees' | 'English' | 'Mah' | 'Science' | 'History';

// MappedType
type Score = {
  [key in SubjectType]: number;
};

// これと同じ
/*
type Score = {
  Japanees: number;
  English: number;
  Mah: number;
  Science: number;
  History: number;
};
*/

const s: Score = {
  Japanees: 90,
  English: 92,
  Mah: 95,
  Science: 92,
  History: 85,
};

console.log(s);
