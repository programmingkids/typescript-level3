export {};

type Animal = {
  name: string;
  walk: () => void;
};

type Dog = {
  name: string;
  walk: () => void;
};

const a: Animal = { name: 'Tama', walk: (): void => {} }; // OK
const d: Dog = a; // (2) OK
