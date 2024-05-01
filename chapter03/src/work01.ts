export {};

console.log('======');

const names = ['micky', 'minny', 'donald'] as const;
type Name = (typeof names)[number]; // type Name = 'micky' | 'minny' | 'donald'

const x: Name = 'micky';
console.log(x);

const y: Name = 'rarara';
console.log(y);
